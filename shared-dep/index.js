console.log('I am shared-dep.')

let state = 1234
console.log('initial state', state)

module.exports = {
  set: (value) => state = value,
  get: () => state,
}
