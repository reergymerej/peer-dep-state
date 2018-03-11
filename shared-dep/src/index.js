console.log('>>> shared-dep >>>, initializing')

let state = 1234

module.exports = {
  set: (value) => state = value,
  get: () => state,
}
