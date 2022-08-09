class Connector{
        ConnectorName(){
            cy.get('.accord > :nth-child(2) > button.ng-star-inserted').click()
            cy.get('div.ng-tns-c297-4 > .options > :nth-child(1) > .options__label').click()
            cy.get('.title__actions > .sp-row-xs > .sp-row__item').click()
            cy.get('.gs-col-4 > .sp-mb-sm').click()
            cy.get('.cw-form-action > .cw-btn-primary').click()
            cy.randomName(':nth-child(2) > .cw-input-text')
            cy.get(':nth-child(1) > .ng-untouched > .wrapper > .icon--unchecked').click()
            cy.get('.cw-form-action > .cw-btn-primary').click()
            cy.get('tbody > :nth-child(3) > .ng-star-inserted').then(($connectorName) => {
                const text = $connectorName.text().trim()
            cy.get('.cw-form-action > .cw-btn-primary').click()
            cy.get('.term__input').type(text)
            cy.get('.term__icon > .ng-star-inserted').click()
            cy.get('cw-card-title > a > span').click()    
            cy.get('[cwtooltip="Connector name"]').contains(text)
            cy.get('[cwtooltip="Connector Id"]').then(($connectorId) => {
                const text = $connectorId.text().trim()
                Cypress.env('connectorId', text)
            })
        })
    }   
}

export default new Connector();