/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { cartPage } from "../../support/pages/cart.page";

Given('I add product to a cart and visit cart page', () => {
    cy.visit('/produtos/')
    cy.addProduct()
    cy.visit('/carrinho/')
})

When('I delete my product from the cart', () => {
    cy.deleteProduct()
})

When('I edit the product in the cart', () => {
    cy.decreaseProduct()
})

Then('The cart must be updated', () => {
    cartPage.emptyMessage.should('contain', 'Seu carrinho está vazio.')
})

Then('The cart must be empty', () => {
    cartPage.emptyMessage.should('contain', 'Seu carrinho está vazio.')
})