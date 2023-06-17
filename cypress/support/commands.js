/// <reference types="cypress" />

Cypress.Commands.add('login', (user, pass) => {
    const fd = new FormData()

    fd.append('log', user)
    fd.append('pwd', pass)
    fd.append('wp-submit', 'Acessar')
    fd.append('redirect_to', `/wp-admin`)
    fd.append('testcookie', 1)

    cy.request({
        url: `/wp-login.php`,
        method: "POST",
        body: fd
    }).then((resp) => {
        resp.headers['set-cookie'].forEach(cookie => {
            const firstPart = cookie.split(';')[0]
            const separator = firstPart.indexOf('=')
            const name = firstPart.substring(0, separator)
            const value = firstPart.substring(separator + 1)
            cy.setCookie(name, value)
        })
    })
    
    cy.visit("/wp-admin")
});

Cypress.Commands.add('addProdutos', (produto, tamanho, cor, quantidade) => {
    cy.get('[class="product-block grid"]')
        .contains(produto).click()
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
})

Cypress.Commands.add('checkout', () => {
    cy.get('.top-cart-wishlist').click()
    cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
})

Cypress.Commands.add('addProduct', () => {
    const fd = new FormData()
    fd.append('attribute_size', 'S')
    fd.append('attribute_color', 'Blue')
    fd.append('quantity', 1)
    fd.append('add-to-cart', 2559)
    fd.append('product_id', 2559)
    fd.append('variation_id', 2574)

    cy.request({
        url: `/product/abominable-hoodie/`,
        method: "POST",
        body: fd
    }).then((resp) => {
        resp.headers['set-cookie'].forEach(cookie => {
            const firstPart = cookie.split(';')[0]
            const separator = firstPart.indexOf('=')
            const name = firstPart.substring(0, separator)
            const value = firstPart.substring(separator + 1)
            cy.setCookie(name, value)
        })

    cy.visit("/product/abominable-hoodie/")
    })
})
