/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const { dashboardPage } = require('../../support/pages')

Given('I visit EBAC Store', () => {
    cy.visit('/')
})

When("I add product to the cart and complete shopping", () => {
    cy.login(user, pass)
})

Then('a success screen must appear', () => {
    dashboardPage.siteName.should("be.visible")
})