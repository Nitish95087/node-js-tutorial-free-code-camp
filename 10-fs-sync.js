const {readFileSync, writeFileSync, write, writeFile}= require('fs');

 const first = readFileSync('./contents/firstfile.txt', 'utf-8');
 const second = readFileSync('./contents/secondfile.txt', 'utf-8');

// console.log(first, second);

writeFileSync('./contents/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'});