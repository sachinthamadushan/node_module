const path = require('path')

console.log(path.sep);

const filePath = path.join('/Images/','log','sample.txt')
const base = path.basename(filePath)
const absolute = path.resolve(__dirname ,'Images','log','sample.txt')

console.log(filePath);
console.log(base);
console.log(absolute);