const sharedDep = require('shared-dep')

console.log('I am feature, built by Webpack!')

console.log('get', sharedDep.get())
console.log('set', sharedDep.set(100))
console.log('get', sharedDep.get())
