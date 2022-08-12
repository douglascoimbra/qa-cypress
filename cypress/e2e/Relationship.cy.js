import LoginTest from '../support/class/login'


describe('Validate Relationship - Carol', () => {

  it('Login', () => {
    LoginTest.accessLogin()
  })

  it('Open Explore Data Model', () => {
    cy.openExploreDataModel('Disease');
  })
  
  it('Open Record', () => {
      cy.contains('disease11').click()
      cy.contains('Viewing golden record').should('exist')
  })

  it('Open 360', () => {
      cy.get('div.drawer__footer.ng-star-inserted > div > button:nth-child(2)').click()
      cy.contains('360º view for').should('exist')
    })

  it('Validate Relationship', () => {
      cy.contains('with_disease_type').should('exist')
      cy.contains('with_disease').should('exist')

  })
})
