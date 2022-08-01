import LoginTest from '../support/class/login'
import Connector from '../support/class/connector'
import StagingTable from '../support/class/staging'
import SendIntake from '../support/class/sendIntake'



describe('Test Connector - Carol', () => {

  it('Login', () => {
    LoginTest.accessLogin()
   })

  it('Creating a Connector', () => {
      Connector.ConnectorName()
  })

  it('Creating a Staging Table', () => {
      StagingTable.Staging()
  })
  
  it('Getting the Auth Token', () => {
    cy.authorizationToken();
  })

  it('Sending Intake data to Staging Table', () => {
    SendIntake.SendingIntake()
  })

})



