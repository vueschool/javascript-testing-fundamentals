// Session class that leverages Date
class Session {
  constructor() {
    this.lastUpdate = Date.now()
  }

  touch() {
    this.lastUpdate = Date.now()
  }
}

// A potential implementation to watch the Date Object
function spyOn(Object, method) { /*... */ }

// A common way of using a spy
const dateSpy = spyOn(Date, 'now')

Date.now()

// A commong way of checking the spy
console.log(dateSpy.called.length > 0)
