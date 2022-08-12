// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('randomName', (selector) => {
   const uuid = () => Cypress._.random(0, 1e6)
   const id = uuid()
   const name = `qa${id}`
   cy.get(selector).type(name)
})

Cypress.Commands.add('createField', (name, type) => {
  cy.get('.sp-row-xs > :nth-child(2) > .cw-btn').click()
  cy.get('#fieldName').type(name)
  cy.get('#editType').select(type).should('have.value',type)
  cy.get('.actions-inline > .cw-btn-primary').click()
})

Cypress.Commands.add('authorizationToken', () => {
   cy.request({
     method:'POST',
     url:'/api/v1/oauth2/token',
     headers:{'Content-Type': 'application/x-www-form-urlencoded'},
     body:{
           grant_type:'password',
           connectorId:'0a0829172fc2433c9aa26460c31b78f0',
           username:'admin@totvslabs.com',
           password:'Carol3.0!',
           subdomain:'totvslabs'},
           }).then((response) => {
              expect(response.body.access_token).is.not.null
              Cypress.env('token', response.body.access_token)
           })
     }
)

Cypress.Commands.add('openExploreDataModel', (dataModel) => {
   cy.get(':nth-child(6) > button.ng-star-inserted').click()
   cy.get('div.ng-tns-c297-6 > .options > :nth-child(1) > .options__label').click()
   cy.wait(1000)
   cy.contains(dataModel).scrollIntoView();
   cy.contains(dataModel).click();
})