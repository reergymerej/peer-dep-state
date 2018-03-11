const sharedDep = require('shared-dep')

console.log('I am host, built by Webpack!')

console.log('get', sharedDep.get())
console.log('set', sharedDep.set(200))
console.log('get', sharedDep.get())

const feature = require('feature')
