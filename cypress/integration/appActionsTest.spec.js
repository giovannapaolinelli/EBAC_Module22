/// <reference types="cypress" />

const data = require("../fixtures/data.json")
const { dashboardPage } = require('../support/pages')

describe('Access Admin Panel', () => {
  beforeEach(() => {
    cy.login(data.usuario, data.senha)
  })

  it('should login with valid credentials', () => {
    dashboardPage.siteName.should("be.visible")
  })
})
