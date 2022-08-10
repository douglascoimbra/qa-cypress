import Login from '../support/class/login'


describe('Validate Homepage - Carol', () => {

  it('Login', () => {
    Login.accessLogin()
  })

  it('Total Golden Records', () => {
    cy.contains('Total Golden Records').should('be.visible')
  })

  it('Staging Tables', () => {
      cy.contains('Staging Tables').should('be.visible')
    })

  it('Storage used', () => {
      cy.contains('Storage used').should('be.visible')
    })

  it('Number of Golden Records per Data Model', () => {
      cy.contains('Number of Golden Records per Data Model').should('be.visible')
    })

  it('Activities for the last 3 days', () => {
      cy.contains('Activities for the last 3 days').scrollIntoView()
      cy.contains('Activities for the last 3 days').should('be.visible')
    })

})
