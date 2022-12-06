const fs = require("fs");
const input = fs.readFileSync("input.txt").toString();

// TASK 1
// const test = input
// .split("\n").slice(0)

const testInput =
[
  "2-4,6-8",  // no
  "2-3,4-5",  // no
  "5-7,7-9",  // 7
  "2-8,3-7",  // complete
  "6-6,4-6",  // 6
  "2-6,4-8",  // 6
]

const testInput2 = 
[
  '12-80,12-81',
  '13-94,14-93', 
  '9-9,10-61',   
  '8-9,9-93',    
  '36-63,55-63', 
  '45-90,67-81',
  '32-61,13-80', 
  '33-65,34-34', 
  '4-95,5-95',   
  '1-86,7-52',
  '10-65,64-64'
]

const testInput3 = 
[
  "13-93,92-92",    // 1
  "2-92,96-99",     // 0 Problem
  "10-10,10-99",    // 1
  "3-70,2-70",      // 1
  "81-89,3-81",     // 0
  "8-9,9-78",       // 0 Problem
  "6-99,75-98",     // 1
  "11-88,11-90",    // 1
  "31-92,32-93",    // 0
  "9-98,90-93"      // 1
]

const testInput4 = 
[
  "5-92,5-87",      // 1
  "53-53,7-53",     // 1
  "61-73,22-73",    // 1
  "34-49,32-67",    // 1
  "54-82,53-55",    // 0
  "5-29,27-29",     // 1
  "15-77,14-66",    // 0
  "22-76,21-22",    // 0
  "87-88,15-88",    // 1
  "38-38,19-37"     // 0
]

const divideAndCheck = (test) =>{
  let pair1 = [];
  let pair2 = [];
  let countAssignments = [];
  let check = [];
  test.map((el) => 
    pair1.push(el.split(",")[0].split("-")) &&
    pair2.push(el.split(",")[1].split("-")) &&
    // Version 1
    parseInt(pair1[0][0]) >= parseInt(pair2[0][0]) && 
    parseInt(pair1[0][1]) <= parseInt(pair2[0][1]) ||
    parseInt(pair1[0][0]) <= parseInt(pair2[0][0]) && 
    parseInt(pair1[0][1]) >= parseInt(pair2[0][1]) ? 
    countAssignments.push(1) && pair1.splice(0) && pair2.splice(0): 
    countAssignments.push(0) && pair1.splice(0) && pair2.splice(0)
  )
  return countAssignments.reduce((acc, cur) => acc + cur,0)
  }
  // const result = divideAndCheck(test);
  // console.log(result);

// TASK 2
  
const test = input
.split("\n").slice(0)
  
const divideAndCheck2 = (test) =>{
  let pair1 = [];
  let pair2 = [];
  let countAssignments = [];
  let check = [];
  test.map((el) => 
  pair1.push(el.split(",")[0].split("-")) &&
  pair2.push(el.split(",")[1].split("-")) &&
  // Version 1
  parseInt(pair1[0][0]) >= parseInt(pair2[0][0]) && parseInt(pair1[0][0]) <= parseInt(pair2[0][1]) ||
  parseInt(pair1[0][1]) >= parseInt(pair2[0][0]) && parseInt(pair1[0][1]) <= parseInt(pair2[0][1]) 
  &&
  parseInt(pair2[0][0]) >= parseInt(pair1[0][0]) && parseInt(pair2[0][0]) <= parseInt(pair1[0][1]) ||
  parseInt(pair2[0][1]) >= parseInt(pair1[0][0]) && parseInt(pair2[0][1]) <= parseInt(pair1[0][1])
  ? 
  countAssignments.push(1) && pair1.splice(0) && pair2.splice(0): 
  countAssignments.push(0) && pair1.splice(0) && pair2.splice(0)
  )
  return countAssignments.reduce((acc, cur) => acc + cur,0)
}
const result = divideAndCheck2(test);
console.log(result);


