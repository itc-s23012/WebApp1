const print = console.log
const stream = require('fs')
  .readFileSync('./data', 'utf8')
  .trim()
const lines = stream.split('\n')
const cols = lines[1].split(' ')
console.log(cols.join('\n))
