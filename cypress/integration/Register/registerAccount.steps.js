/// <reference types="cypress" />
var faker = require('faker');

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const { register, dashboardPage } = require('../../support/pages')

Given("I dashboard", () => {
    cy.visit('/my-account/')
});

When('I register with email and password', () => {
    let emailFaker = faker.internet.email()
    let pass = faker.internet.password()
    register.RegisterPage(emailFaker, pass)
});

Then('My account page must be visible', () => {
    loginPage.login(data.usuario, data.senha)
    dashboardPage.siteName.should("be.visible")
});