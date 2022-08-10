
class wrongtest{

    email(){
        cy.visit('/')
        cy.get('#email').type('wrong@totvslabs.com')
        cy.get('#password').type('Carol3.0!')
        cy.get('.gate-btn').click()
        cy.contains('Incorrect login was used.').should('be.visible')
        cy.get('.gate-error').should('be.visible')
    }

    login(){
        cy.visit('/')
        cy.get('#email').type('orgadmin@totvslabs.com')
        cy.get('#password').type('Carol1.0!')
        cy.get('.gate-btn').click()
        cy.contains('Incorrect login was used.').should('be.visible')
        cy.get('.gate-error').should('be.visible')
    }

}
export default new wrongtest()