/// <reference types="Cypress" />

Given(/^Open browser$/, function () {
    cy.viewport('macbook-15');
    cy.visit('https://dana-train-web-admin-stg.enouvo.com/login')
    
    // cy.eyesCheckWindow('Main Page');
});