const print = console.log
const stream = require('fs')
  .readFileSync('./data', 'utf8')
  .trim()
const lines = stream.split('\n')
const colse = lines[0].split(' ')
console.log(colse.join('\n'))
