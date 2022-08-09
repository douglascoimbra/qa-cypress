import LoginTest from '../support/class/loginOrg'


describe('Org Admin Users - Carol', () => {

  it('Login', () => {
    LoginTest.accessLogin()
  })

  it('Open Manage Users', () => {
      cy.get('header > div.title > div.title__actions > cw-dropdown > div > div:nth-child(1) > button').click()
      cy.get('a[href="/carol-org/admin/users"]').click()
      cy.contains('Users in your organization').should('be.visible')
  })

  it('Search User', () => {
    cy.get('.term__input')
    cy.get('.term__input').type('admin@totvslabs.com')
    cy.get('.term__icon > svg').click()
    cy.contains('admin@totvslabs.com').should('be.visible')
    cy.contains('business@totvslabs.com').should('not.exist')
    cy.contains('orgadmin@totvs.com').should('not.exist')
  })
  

})
