describe('Test Login - Carol', () => {
  it('Login Success', () => {
    cy.loginTest('admin@totvslabs.com','Carol3.0!')
    cy.contains('Totvs').should('be.visible')
  })

  it('Wrong Login - Email', () => {
    cy.loginTest('wrong@totvslabs.com','Carol3.0!')
    cy.contains('Incorrect login was used.').should('be.visible')
    cy.get('.gate-error').should('be.visible')
  })

  it('Wrong Login - Password', () => {
    cy.loginTest('admin@totvslabs.com','Carol1.0!')
    cy.contains('Incorrect password was used').should('be.visible')
    cy.get('.gate-error').should('be.visible')
  })

})

describe('Test Login - Carol Env', () => {
  it('Login Success', () => {
    cy.loginAdminEnv()
    cy.contains('Totvs').should('be.visible')
  })

})