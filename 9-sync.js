const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./Images/first.txt','utf8')
const second = readFileSync('./Images/second.txt','utf8')

writeFileSync('./Images/result-sync.txt',
`Here is the result : ${first}, ${second}`,
{flag:'a'})