const print = console.log
const stream = require('fs')
  .readFileSync('./data', 'utf8')
  .trim()
const lines = stream.split('\n')

//console.log(lines[0]) //
//console.log(lines[1]) //
//console.log(lines[2]) //
console.log(lines.join('\n'))
