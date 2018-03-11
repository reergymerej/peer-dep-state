console.log('>>> HOST >>>')
const sharedDep = require('shared-dep')

console.log('HOST get', sharedDep.get())
console.log('HOST set', sharedDep.set(200))
console.log('HOST get', sharedDep.get())

const feature = require('feature')

console.log('HOST get', sharedDep.get())
console.log('HOST set', sharedDep.set(200))
console.log('HOST get', sharedDep.get())
