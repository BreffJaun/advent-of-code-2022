const fs = require("fs");
const input = fs.readFileSync("input.txt").toString();

// TASK 1
const test = input
.split("\n")
.map((el) => el.slice(5)
.replace("from ", "")
.replace("to ", "")
.split(" "))

// const testInput = 
// [
//   "move 1 from 2 to 1",
//   "move 3 from 1 to 3",
//   "move 2 from 2 to 1",
//   "move 1 from 1 to 2",
// ]
// const testInputArr = testInput
// .map((el) => el.slice(5)
// .replace("from ", "")
// .replace("to ", "")
// .split(" "))


const rearrangeAndCheck = (test) => {
  let result = [];
  let cargoArr = 
  [
    ["T", "F", "V", "Z", "C", "W", "S", "Q"], 
    ["B", "R", "Q"],
    ["S", "M", "P", "Q", "T", "Z", "B"],
    ["H", "Q", "R", "F", "V", "D"],
    ["P", "T", "S", "B", "D", "L", "G", "J"],
    ["Z", "T", "R", "W"],
    ["J", "R", "F", "S", "N", "M", "Q", "H"],
    ["W", "H", "F", "N", "R"],
    ["B", "R", "P", "Q", "T", "Z", "B"],
  ]
  // let testCargoArr = 
  // [
  //   ["N", "Z"],
  //   ["D", "C", "M"],
  //   ["P"]
  // ]
  test.map((el) => {
    for (let i = 1; i <= el[0]; i++) {
        cargoArr[el[2]-1].unshift(cargoArr[el[1]-1].shift())
      }
    }
  )
  const topOfEachStack = cargoArr.map((el) => result.push(el[0]))
  return result

}
// const result = rearrangeAndCheck(test);
// console.log(result);


// TASK 2

const test2 = input
.split("\n")
.map((el) => el.slice(5)
.replace("from ", "")
.replace("to ", "")
.split(" "))

// const testInput2 = 
// [
//   "move 1 from 2 to 1",
//   "move 3 from 1 to 3",
//   "move 2 from 2 to 1",
//   "move 1 from 1 to 2",
// ]
// const testInputArr2 = testInput2
// .map((el) => el.slice(5)
// .replace("from ", "")
// .replace("to ", "")
// .split(" "))

// const testInput3 = 
// [
//   // "move 3 from 8 to 2",
//   // "move 3 from 1 to 5",
//   // "move 3 from 1 to 4",
//   // "move 2 from 7 to 4",
//   // "move 3 from 7 to 4",
//   // "move 8 from 5 to 7",
//   // "move 2 from 1 to 8",
//   // "move 7 from 3 to 2",
//   // "move 1 from 5 to 2",
//   // "move 1 from 6 to 7"
// ]
// const testInputArr3 = testInput3
// .map((el) => el.slice(5)
// .replace("from ", "")
// .replace("to ", "")
// .split(" "))

const rearrangeAndCheck2 = (test2) => {
  let helpArray = []
  let result = [];
  let cargoArr = 
  [
    ["T", "F", "V", "Z", "C", "W", "S", "Q"], 
    ["B", "R", "Q"],
    ["S", "M", "P", "Q", "T", "Z", "B"],
    ["H", "Q", "R", "F", "V", "D"],
    ["P", "T", "S", "B", "D", "L", "G", "J"],
    ["Z", "T", "R", "W"],
    ["J", "R", "F", "S", "N", "M", "Q", "H"],
    ["W", "H", "F", "N", "R"],
    ["B", "R", "P", "Q", "T", "Z", "B"],
  ]

  // let testCargoArr = 
  // [
  //   ["N", "Z"],
  //   ["D", "C", "M"],
  //   ["P"]
  // ]

  test2.map((el) => {
    helpArray.push(cargoArr[el[1]-1].splice(0, el[0])) &&
    helpArray[0].reverse().map((char) => cargoArr[el[2]-1].unshift(char)) &&
    helpArray.splice(0)
    }
  )
  cargoArr.map((el) => result.push(el[0]))
  return result

}
const result2 = rearrangeAndCheck2(test2);
console.log(result2);

