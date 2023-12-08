const print = console.log
const stream = require('fs')
  .readFileSync('./data', 'utf8')
  .trim()
const lines = stream.split('\n')
const N = parseInt(lines[0], 10)
const select = lines.slice(1, N + 1)
console.log(select.join('\n'))
