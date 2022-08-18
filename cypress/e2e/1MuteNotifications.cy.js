import Login from '../support/class/login'

describe('Mute Notifications', () => {

    it('Mute Notifications', () => {
      Login.accessLogin()
      cy.get('cw-header-notifications > cw-dropdown > .ddown-parent > :nth-child(1) > .icon-button > .cw-icon > .ng-star-inserted > use').scrollIntoView()
      cy.get('cw-header-notifications > cw-dropdown > .ddown-parent > :nth-child(1) > .icon-button > .cw-icon > .ng-star-inserted > use').click({force: true})
      cy.get('[type="checkbox"]').check({force: true})
    })
})
