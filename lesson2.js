// Permissions implementation does not matter
import { Permissions } from '@/lib/permissions'

// Check what should be tested
class User {

  // NO
  constructor(details, traits = {}) {
    const { firstname, lastname } = details
    this.firstname = firstname
    this.lastname = lastname
    this.traits = traits

    this.sessionStartedAt = Date.now()
  }

  // YES
  get name() {
    return `${this.firstname} ${this.lastname}`
  }

  // YES
  get isAdmin() {
    return Permissions.granted(this, 'admin')
  }

  // YES in combination
  get currentSessionIsValid() {
    const tenMinutesInMiliseconds = 600000
    return (this.sessionStartedAt + tenMinutesInMiliseconds) <= Date.now()
  }

  extendSession() {
    this.sessionStartedAt = Date.now()
  }
}
