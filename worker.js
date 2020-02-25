console.log("====> in worker");
const fs=require('fs');
fs.writeFileSync('output.txt', "hello world");
