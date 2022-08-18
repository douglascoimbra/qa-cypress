import Login from '../support/class/login'
import Connector from '../support/class/connector'
import StagingTable from '../support/class/staging'
import SendIntake from '../support/class/sendIntake'
import Etl from '../support/class/etl'



describe('Test Connector - Carol', () => {

  it('Login', () => {
    Login.accessLogin()
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

  it('Create Duplicate ETL', () => {
    Etl.Duplicate()
  })  
/*
  it('Create Join ETL', () => {
    Etl.Join()
  })
  
  it('Create Split ETL', () => {
    Etl.Split()
  })  
*/
})
