const print = console.log
const stream = require('fs')
  //  .readFileSync('/dev/stdin', 'utf-8') //
  .readFileSync('./data', 'utf8')
  .trim()
const lines = stream.split('\n')
const [a, b] = lines

print('stream', stream)
print('lines', lines)
print(a, b)
