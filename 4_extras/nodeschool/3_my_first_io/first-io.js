const fs = require("fs"); // importing file system 
// fs is part of node's core, no need to install 
// blocking operation ...
const buff = fs.readFileSync(process.argv[2]); // read the file
// we go line 5 once the file is read ...
const str = buff.toString(); // convert buffer to string
// console.log(buff); // machine version of the file
// console.log(str); // human version of the file
const arr = str.split("\n");
console.log(arr.length - 1); // remove the extra line