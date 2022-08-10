

class Login {
    
    accessLogin(){
        cy.visit('/totvslabs')
        cy.get('#email').type('admin@totvslabs.com')
        cy.get('#password').type('Carol3.0!')
        cy.get('.gate-btn').click()
    }

    LoginAdminOrg(){
        cy.visit('/')
        cy.get('#email').type('orgadmin@totvs.com')
        cy.get('#password').type('Carol3.0!')
        cy.get('.gate-btn').click()
    }

}

export default new Login();
