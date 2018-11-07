// Custom Pokemons Implementation
let Pokemons = {
  // Method we want to replace
  amount() {
    // Call to database
  },

  // Method we want to stay intact
  say(str) {
    console.log('Your Pokedex says: ', str)
  }
}

// Function using Pokemons class
function howsMyCollection() {
  const size = Pokemons.amount()
  if (size === undefined)
    return Pokemons.say('Ooops, not sure how many you have')
  if (size < 10)
    return Pokemons.say('You only have a few, you need more')
  if (size < 50)
    return Pokemons.say('You have quite some favorites. Keep going')
  return Pokemons.say('You are quite a collector')
}

// Keep an implementation of original implementation for potential use later on
const originalAmount = Pokemons.amount

// Change the output of the amounts function
function stubAmount(amount) {
  Pokemons.amount = () => amount
}

// Testing function
function havePokemons(amount) {
  stubAmount(amount)
  howsMyCollection()
}

// A few tests to show outputs
havePokemons(5)   // -- You only have a few, you need more
havePokemons(17)  // -- You have quite some favorites. Keep going
havePokemons(100) // -- You are quite a collector
