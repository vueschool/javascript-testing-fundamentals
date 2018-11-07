// Potential User Class that requires testing
class User {
  constructor(details) {
    const { firstname, lastname } = details
    this.firstname = firstname
    this.lastname = lastname
  }

  get name() {
    return `${this.firstname} ${this.lastname}`
  }
}

// Plain JavaScript function used for testing
const nameTest = function () {
  // Define a user Object
  const userDetails = {
    firstname: 'Jane',
    lastname: 'Doe'
  }

  // Instantiate a new User
  const testUser = new User(userDetails)
  // Print out result of the test
  console.log('Username is correct: ', testUser.name === 'Jane sssDoe')
}

// Execute the test
nameTest()

// A real world user test flow could look like this

// test('user signs up and changes email', () => {

  // 1. Signup using the form
  // - Fill out form fields and submit

  // 2. Navigate to settings
  // - Find correct navigation elements

  // 3. Change Value for Email
  // - Find email field
  // - Update Value
  // - Submit Form
  // Check Value is correct

  // 4. Signout
  // - Find Singout option
  // - Verify Singout worked

// })
