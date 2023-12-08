const file = '/dev/stdin'
// const file = './data'
const stream = require('fs').readFileSync(file, 'utf8').trim()
const lines = stream.split('\n')

console.log(lines[0])
