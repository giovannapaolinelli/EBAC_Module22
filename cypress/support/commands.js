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

Cypress.Commands.add('checkout', () => {
    cy.get('.top-cart-wishlist').click()
    cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
})

Cypress.Commands.add('deleteProduct', () => {
    cy.get('.remove > .fa').click()
    cy.intercept('POST', '/?wc-ajax=get_refreshed_fragments', (req) => {
    req.reply({
        status: 200,
        body: {
        "fragments": {
            "div.widget_shopping_cart_content": "<div class=\"widget_shopping_cart_content\">\r\n<div class=\"mini_cart_content\">\r\n\t<div class=\"mini_cart_inner\">\r\n\t\t<div class=\"mcart-border\">\r\n\t\t\t\t\t\t\t<ul class=\"cart_empty \">\r\n\t\t\t\t\t<li>You have no items in your shopping cart<\/li>\r\n\t\t\t\t\t<li class=\"total\">Subtotal: <span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#82;&#36;<\/span>0,00<\/bdi><\/span><\/li>\r\n\t\t\t\t<\/ul>\r\n\t\t\t\r\n\t\t\t\t\t\t<div class=\"clearfix\"><\/div>\r\n\t\t<\/div>\r\n\t<\/div>\r\n<\/div>\r\n<\/div>",
        }
    }
    })
    })
})

Cypress.Commands.add('decreaseProduct', () => {
    cy.get('.minus').click()
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
