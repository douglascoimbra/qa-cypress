import LoginTest from '../support/class/login'


describe('Test User Account Menus - Carol', () => {

  it('Login', () => {
    LoginTest.accessLogin()
  })

  it('Open My Account Menu', () => {
      cy.get('cw-header-user > :nth-child(1) > .ddown-parent > :nth-child(1) > .icon-button > .cw-icon > .ng-star-inserted').click()
      cy.get('a[routerLink="/my-account"]').click()
      cy.contains('Edit My Account').should('be.visible')
  })

  it('Open My Account - Change Password', () => {
      cy.contains('Change Password').click()
      cy.contains('Change Password').should('be.visible')
  })
  
  it('Open Tenant Admin', () => {
      cy.get('cw-header-user > :nth-child(1) > .ddown-parent > :nth-child(1) > .icon-button > .cw-icon > .ng-star-inserted').click()
      cy.get('a[routerLink="/tenant"]').click()
      cy.contains('Tenant Settings').scrollIntoView()
      cy.contains('Tenant Settings').should('be.visible')
  })

  it('Open Tenant Admin - Users', () => {
      cy.contains('Users').click()
      cy.contains('Users in your Tenant').should('be.visible')
  })

  it('Open Tenant Admin - Invites', () => {
      cy.contains('Invites').click()
      cy.contains('Invited Colleagues').should('be.visible')
  })

  it('Open Tenant Admin - Tokens', () => {
      cy.contains('Tokens').click()
      cy.contains('Carol tokens').should('be.visible')
  })

  it('Open Tenant Admin - Data Access Levels', () => {
    cy.contains('Data Access Levels').click()
    cy.contains('Data Access Levels').should('be.visible')
    cy.contains('Access Rules').should('be.visible')
  })

  it('Open Invite Colleague', () => {
    cy.get('cw-header-user > :nth-child(1) > .ddown-parent > :nth-child(1) > .icon-button > .cw-icon > .ng-star-inserted').click()
    cy.get('div.ddown.ddown--opens-on-click.ddown--arrow-top.ddown--transition.ddown--position-right.is-visible > ul > li:nth-child(3) > button').click()
    cy.contains('Enter email').should('be.visible')
    cy.contains('User role').should('be.visible')
  })
})
