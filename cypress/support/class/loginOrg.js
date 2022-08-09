

class LoginTest {
    accessLogin(){
        cy.visit('/')
        cy.get('#email').type('orgadmin@totvs.com')
        cy.get('#password').type('Carol3.0!')
        cy.get('.gate-btn').click()
    }
}

export default new LoginTest();

/*
Cypress.Commands.add('loginTest', (email, password) => {
    cy.visit('/')
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.get('.gate-btn').click()
 })

 Cypress.Commands.add('loginAdminEnv', () => {
     cy.visit('/totvslabs')
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
*/