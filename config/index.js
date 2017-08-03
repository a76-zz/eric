const port = 3000
const host = 'tv.localtest.me'

const messageTypes = [
  'stateRequested'
].reduce((acc, msg) => {
  acc[msg] = msg
  return acc
}, {})

module.exports = {
  port,
  host,
  messageTypes,
  uri: `http://${host}:${port}`
}