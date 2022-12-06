const fs = require("fs");
const input = fs.readFileSync("text.txt").toString();

// TASK 1
const test = input
.split("\n")
.map((el) => (!el ? " " : el))
.join(" ")
.split("  ")
.map((el) => el.split(' ')
.filter((el)=>  el.length > 0)
.map((el) => parseInt(el))
.reduce((acc, cur) => acc + cur, 0)

// TASK 2
).sort((a, b) => b - a).slice(0, 3)
.reduce((acc, cur) => acc +cur, 0)

console.log(test);




