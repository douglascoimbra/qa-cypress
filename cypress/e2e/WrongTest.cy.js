import wrongtests from "../support/class/wrongtests"

describe('Wrong Tests', () => {

  it('Wrong Login - Email', () => {
    wrongtests.email()
  })

  it('Wrong Login - Password', () => {
    wrongtests.login()
  })

})
