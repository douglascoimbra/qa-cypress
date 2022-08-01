class SendIntake {
    SendingIntake(){
       cy.request({
         method:'POST',
         url:'/api/v3/staging/intake/stagingtest?connectorId=' + Cypress.env('connectorId') + '&returnData=true',
         headers:{
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + Cypress.env('token')
            },
         body:{
               field_string:'teste String',
               field_boolean:true,
               field_date:'2022-07-29',
               field_double:100.5 },
         }).then((response) => {
                  expect(response.status).to.eq(200)
                  expect(response.body).to.have.property('success', true)
                })
    }
}

export default new SendIntake();