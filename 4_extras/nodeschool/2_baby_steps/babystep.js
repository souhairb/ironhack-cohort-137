// const arr = process.argv.splice(2);
// const sum = arr.reduce((a, v) => a + Number(v), 0)
// console.log(sum);

// soluce 3 => forEach sur tableau destructuré avec l'opérateur spread
var sum = 0;
const [head, , ...tail] = process.argv;
tail.forEach(n => {
  sum += Number(n);
});