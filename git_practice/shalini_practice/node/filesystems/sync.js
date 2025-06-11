const fs = require('fs');

const data = fs.readFileSync('file.txt', 'utf-8');
console.log(data);

fs.writeFileSync('file.txt', 'hello file');