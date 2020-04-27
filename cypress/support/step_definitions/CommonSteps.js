/// <reference types="Cypress" />

beforeEach(function () {
    cy.log('Start testing..........')
    cy.clearLocalStorage()
    cy.clearCookies()
    cy.reload(true)

    Cypress.on('uncaught:exception', () => {
      return false
    })

    console.log('Start test')
  })
  
  afterEach(function () {
    cy.log('End testing..........')
    cy.clearLocalStorage()
    cy.clearCookies()
    // cy.reload(true)
  })
  
  Given(/^I open DucTri site$/, function () {
    cy.visit({
      url :"https://ductri-admin-web-" + Cypress.env('env') + ".enouvo.com/login",
      failOnStatusCode: false
    })
  });
  
  
  

  

  
  