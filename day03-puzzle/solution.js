const fs = require("fs");
const { CLIENT_RENEG_LIMIT } = require("tls");
const input = fs.readFileSync("input.txt").toString();

// TASK 1
// const test = input
// .split("\n").slice(2)

// const test2 = [
//   "vJrwpWtwJgWrhcsFMMfFFhFp",
//   "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
//   "PmmdzqPrVvPwwTWBwg",
//   "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
//   "ttgJtRGJQctTZtZT",
//   "CrZsJsPPZsGzwwsLwLmpwMDw"
// ]

// const divideAndCheck = (test) => {
//   let firstPart = []
//   let secondPart = []
//   let equalChar = [];
//   let sumOfPriorities = [0];
//   const abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//   test.map((el) => 
//     firstPart.push(el.slice(0, el.length/2).split("")) && 
//     secondPart.push(el.slice(el.length/2).split("")) &&
//     equalChar.push(firstPart[0].filter((char) => secondPart[0].includes(char))) && 
//     sumOfPriorities.push((abc.indexOf(equalChar[0][0])+1)+sumOfPriorities[0]) &&
//     firstPart.splice(0) &&
//     secondPart.splice(0) &&
//     equalChar.splice(0) &&
//     sumOfPriorities.shift()
//   )
//   return sumOfPriorities;
// }
// const result = divideAndCheck(test);
// console.log(result);

// TASK 2

const test = input
.split("\n").slice(2)
const test2 = [];
const chunkSize = 3
for (let i = 0; i < test.length; i+= chunkSize) {
  const chunk = test.slice(i, i + chunkSize)
  test2.push(chunk)
}

const divideAndCheck = (test) => {
  let firstPart = []
  let secondPart = []
  let thirdPart = []
  let equalChar = [];
  let sumOfPriorities = [0];
  const abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  test.map((el) => 
    firstPart.push(el[0].split("")) && 
    secondPart.push(el[1].split("")) &&
    thirdPart.push(el[2].split("")) &&
    equalChar.push(firstPart[0].filter((char) => secondPart[0].includes(char) && thirdPart[0].includes(char))) &&
    sumOfPriorities.push((abc.indexOf(equalChar[0][0])+1)+sumOfPriorities[0]) &&
    firstPart.splice(0) &&
    secondPart.splice(0) &&
    equalChar.splice(0) &&
    thirdPart.splice(0) &&
    sumOfPriorities.shift()
  )
  return sumOfPriorities;
}
const result = divideAndCheck(test2);
console.log(result);



