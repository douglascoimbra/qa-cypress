class StagingTable {
        Staging(){
            cy.get('.sp-row-xs > .cw-btn-primary').click()
            cy.get('.cw-input-text').type('stagingtest')
            cy.get(':nth-child(2) > .sp-mb-sm > .wrapper > .icon--unchecked').click()
            cy.get('.cw-form-action > .cw-btn-primary').click()
            cy.createField('field_string', 'string')
            cy.createField('field_base64', 'base64')
            cy.createField('field_boolean', 'boolean')
            cy.createField('field_date', 'date')
            cy.createField('field_double', 'double')
            cy.createField('field_geopoint', 'geopoint')
            cy.createField('field_nested', 'nested')
            cy.createField('field_object', 'object')
            cy.get('cw-card-f.host--padding-top > .cw-btn-subtle-primary').click()
            cy.get('cw-add-staging-table-identifiers.ng-star-inserted > div > .cw-btn-subtle-primary').click()
            cy.get('.cw-input-text').type('id')
            cy.get('#fields').type('field_string{enter}')
            cy.get('cw-card-f.host--padding-top > .cw-form-action > .sp-mr-xs').click()
            cy.get('.cw-form-action__item > .cw-btn-primary').click()
        }

        SnapShotStage(){
            cy.get('.sp-row-xs > .cw-btn-primary').click()
            cy.get('.cw-input-text').type('stagingtest')
            cy.get('input[type=file]').selectFile('./cypress/support/files/stagingtest.json', {force: true})
            cy.contains('stagingtest.json').should('be.visible')
            cy.get('.cw-form-action > .cw-btn-primary').click()
            cy.get('.cw-form-action__item > .cw-btn-primary').click()
        }

}

export default new StagingTable();