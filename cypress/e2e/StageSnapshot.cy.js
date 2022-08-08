import LoginTest from '../support/class/login'
import Connector from '../support/class/connector'
import StagingTable from '../support/class/staging'
import SendIntake from '../support/class/sendIntake'



describe('Create stage with Snapshot Json', () => {

  it('Login', () => {
    LoginTest.accessLogin()
  })

  it('Creating a Connector', () => {
    Connector.ConnectorName()
  })

  it('Upload Json Snapshot', () => {
    StagingTable.SnapShotStage()
  })

  it('Getting the Auth Token', () => {
    cy.authorizationToken();
  })

  it('Sending Intake data to Staging Table', () => {
    SendIntake.SendingIntake()
  })  

})