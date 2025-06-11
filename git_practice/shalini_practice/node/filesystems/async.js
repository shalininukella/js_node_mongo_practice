const { read } = require('fs');
const fs = require('fs/promises');

async function readFiling() {
    const data = await fs.readFile('file.txt', 'utf-8');
    console.log(data);
}

readFiling().catch(err => console.log(err));

//writing 

async function writing() {
    fs.writeFile('file.txt', 'utf-8');
    console.log('written');
}
writing().catch(err => console.log(err));