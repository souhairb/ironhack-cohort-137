const fs = require("fs");

function displayNumOfLines(n) {
  console.log(n);
}

fs.readFile(process.argv[2], (err, data) => {
  if (err) throw err;
  const arr = data.toString().split("\n");
  displayNumOfLines(arr.length);
});
