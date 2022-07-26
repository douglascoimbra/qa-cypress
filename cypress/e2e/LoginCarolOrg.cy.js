describe('Test Login - Carol Org', () => {
  it('Login Success', () => {
    cy.loginAdminOrg()
    cy.wait(6000)
    cy.get('cw-trail-item > .sp-mr-xxs').contains('Organization').should('be.visible')
    cy.contains('Totvs').should('be.visible')
  })
})