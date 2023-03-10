const { readFile, writeFile, read} = require('fs');

readFile('./contents/firstfile.txt', 'utf-8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first= result;
    readFile('./contents/secondfile.txt', 'utf-8', (err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./contents/result-async.txt',`The result is: ${first} , ${second}`,(err, result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        } );
    })
} )