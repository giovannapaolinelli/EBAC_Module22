/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const { CheckoutPage } = require('../../support/pages')
import { orderPage } from "../../support/pages/order.page";

const address = require('../../fixtures/dados.json')

Given('I visit EBAC Store cart page', () => {
    cy.visit('/carrinho/')
})

When('I delete my product from the cart', () => {
    cy.addProduct()
    cy.checkout()
})

Then('The cart must be empty', () => {
    orderPage.message.should('contain', 'Obrigado. Seu pedido foi recebido.')
})