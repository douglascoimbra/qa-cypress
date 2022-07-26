// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('loginTest', (email, password) => {
    cy.visit('/')
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.get('.gate-btn').click()
 })

 Cypress.Commands.add('loginAdminEnv', () => {
     cy.visit('/')
     cy.get('#email').type('admin@totvslabs.com')
     cy.get('#password').type('Carol3.0!')
     cy.get('.gate-btn').click()
  })

 Cypress.Commands.add('loginAdminOrg', () => {
     cy.visit('/')
     cy.get('#email').type('orgadmin@totvs.com')
     cy.get('#password').type('Carol3.0!')
     cy.get('.gate-btn').click()
  })

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })