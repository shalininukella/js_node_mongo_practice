//callback - async 
const fs = require('fs');
const { threadId } = require('worker_threads');

function filing (){
    fs.readFile('file.txt', 'utf-8', (err, data) => {
        if(err){
            throw err;
        }
        else{
            console.log(data);
        }
    })

    fs.writeFile('file.txt', 'hi file', (err) => {
        if(err) throw err;
        console.log('file written')
    });
}

