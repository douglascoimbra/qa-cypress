class Etl {

    Duplicate(){
        cy.get('.sp-p-sm > cw-filter > .search__refresh').click()
        cy.wait(2000)
        cy.get('.js-staging--stagingtest > .sp-row__item').click()
        cy.get('.ddown-parent > :nth-child(1) > .cw-btn').click()
        cy.get('cw-dropdown.sp-row__item > .ddown-parent > .ddown > .cw-list-options > :nth-child(1) > .cw-list-option').click()
        cy.get('#output_0').clear().type('DuplicateTest')
        cy.get('.cw-btn-primary').click()
        cy.get('button:contains(Publish)').should('exist').click()
        cy.wait(2000)
        cy.contains('ETL published').should('exist')
        cy.get(':nth-child(3) > .cw-trail-link').click()
    }    

    Join(){
        cy.get('.sp-p-sm > cw-filter > .search__refresh').click()
        cy.wait(2000)
        cy.get('.js-staging--stagingtest > .sp-row__item').click()
        cy.wait(10000)
        cy.get('.ddown-parent > :nth-child(1) > .cw-btn').click()
        cy.get('cw-dropdown.sp-row__item > .ddown-parent > .ddown > .cw-list-options > :nth-child(2) > .cw-list-option').click()
        cy.get('.anchor__action-btn > .cw-icon > .ng-star-inserted').click()
        cy.get('.option__value').click()
        cy.get(':nth-child(3) > cw-toggle-staging-lookup > [cwtooltip="Staging Tables that are mapped or have an ETL cannot be set as Lookup tables"] > cw-toggle.ng-untouched > .wrapper > .toggle').click()
        cy.contains('Lookup updated').should('be.visible')
        cy.get('#field-0').select('field_string').should('have.value', 'field_string')
        cy.get('#target-field-0').select('field_string').should('have.value', 'field_string')
        cy.get('#output-0').clear().type('JoinTest')
        cy.get(':nth-child(1) > .cw-btn-primary').click()
        cy.get('button:contains(Publish)').should('exist').click()
        cy.wait(2000)
        cy.contains('ETL published').should('exist')
        cy.get(':nth-child(3) > .cw-trail-link').click()
    }    

    Split(){
        cy.get('.sp-p-sm > cw-filter > .search__refresh').click()
        cy.get('.js-staging--stagingtest > .sp-row__item').click({multiple:true})
        cy.wait(10000)
        cy.get('.ddown-parent > :nth-child(1) > .cw-btn').click()
        cy.get('cw-dropdown.sp-row__item > .ddown-parent > .ddown > .cw-list-options > :nth-child(3) > .cw-list-option').click()
        cy.get('#field0').select('field_boolean').should('have.value', '@@field_boolean')
        cy.get('#function0').select('Contains').should('have.value', '7c8b81e077a45b6d2c9c03d3a22c0d5b')
        cy.get('#value0-0').type('true')
        cy.get('#output1-0').clear().type('SplitTest')
        cy.get('#output2-0').clear().type('SplitTestOther')
        cy.get(':nth-child(1) > .cw-btn-primary').click()
        cy.get('button:contains(Publish)').should('exist').click()
        cy.wait(2000)
        cy.contains('ETL published').should('exist')
        cy.get(':nth-child(3) > .cw-trail-link').click()
    }      

}

export default new Etl();




