console.log('>>> FEATURE >>>')
const sharedDep = require('shared-dep')

console.log('FEATURE get', sharedDep.get())
console.log('FEATURE set', sharedDep.set(100))
console.log('FEATURE get', sharedDep.get())
