const fs = require('fs/promises');

async function reading() {
    try{
        const data = await fs.readFile('file', 'utf-8');
        console.log(data);
    }catch(err){
        console.error(err)
    }finally{
        console.log('finally')
    }
}

//or 

async function readFiling() {
    const data = await fs.readFile('file.txt', 'utf-8');
    console.log(data);
}

readFiling().catch(err => console.log(err));
