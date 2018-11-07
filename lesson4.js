// import { Permissions } from '@/lib/permissions'
let args = []

// Replace the imported Persmissions with a custom mock implementation
const Permissions = {
  granted(...params) {
    args.push([...params])
  }
}

// Potential User class
class User {}

const user = new User()

// Function that uses the Permissions dependency
// and now uses the mocked implementation
function isUserAdmin() {
  return Permissions.granted(user, 'admin')
}

const test = function () {
  isUserAdmin()
  return JSON.stringify(args[0]) === JSON.stringify([user, 'admin'])
}

// Execute the test and print out the result
console.log(test())
