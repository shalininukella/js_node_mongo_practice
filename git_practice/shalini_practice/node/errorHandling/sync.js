const fs = require('fs');

try{
    const data = fs.readFile('file.txt', 'utf-8');
    console.log(data)
}catch(err){
    console.error(err.message);
}finally{
    console.log("finally")
}