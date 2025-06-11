const fs = require('fs');

fs.readFile('file', 'utf-8', (err, data) => {
    if(err) 
        console.log(err);
    else 
        console.log(data);
})

fs.writeFile('file', 'hi', (err) => {
    if (err)
        console.log(err);
    console.log('written')
})