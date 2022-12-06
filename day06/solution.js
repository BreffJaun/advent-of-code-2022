const fs = require("fs");
const input = fs.readFileSync("input.txt").toString();

// TASK 1

const test = input

// const testInput = "bvwbjplbgvbhsrlpgdmjqwftvncz"
// const testInput = "nppdvjthqldpwncqszvftbrmjlhg"
// const testInput = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg"
// const testInput = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw"

const divideAndCheck = (test) => {
  let comp = []
  let char1 = []
  let char2 = []
  let char3 = []
  let char4 = []
  let countChar1 = 0
  let countChar2 = 0
  let countChar3 = 0
  let countChar4 = 0
  for (let i = 0; i < test.length; i++) {
    comp.push(test.substring(i, i+4).split("")) &&
    char1.push(comp[0][0]) && char2.push(comp[0][1]) && 
    char3.push(comp[0][2]) && char4.push(comp[0][3]) &&
    comp[0].some((el) => {
      if(el.includes(char1[0])) {
        countChar1++
      }
      if(el.includes(char2[0])) {
        countChar2++
      }
      if(el.includes(char3[0])) {
        countChar3++
      }
      if(el.includes(char4[0])) {
        countChar4++
      }
    })
    if (countChar1 > 1 || countChar2 > 1 || countChar3 > 1 || countChar4 > 1) {
      comp.splice(0)
      char1.splice(0)
      char2.splice(0)
      char3.splice(0)
      char4.splice(0)
      countChar1=0
      countChar2=0
      countChar3=0
      countChar4=0
    } else {
      return test.indexOf(comp[0].join(""))+4
    }
  }
  
}
// const result = divideAndCheck(test);
// console.log(result);

// TASK 2

const test2 = input

const testInput2 = "mjqjpqmgbljsphdztnvjfqwrcgsmlb"
// const testInput2 = "nppdvjthqldpwncqszvftbrmjlhg"
// const testInput2 = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg"
// const testInput2 = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw"

const divideAndCheck2 = (test2) => {
  let comp = []
  let char1 = []
  let char2 = []
  let char3 = []
  let char4 = []
  let char5 = []
  let char6 = []
  let char7 = []
  let char8 = []
  let char9 = []
  let char10 = []
  let char11 = []
  let char12 = []
  let char13 = []
  let char14 = []
  let countChar1 = 0
  let countChar2 = 0
  let countChar3 = 0
  let countChar4 = 0
  let countChar5 = 0
  let countChar6 = 0
  let countChar7 = 0
  let countChar8 = 0
  let countChar9 = 0
  let countChar10 = 0
  let countChar11 = 0
  let countChar12 = 0
  let countChar13 = 0
  let countChar14 = 0
  
  for (let i = 0; i < test2.length; i++) {
    comp.push(test2.substring(i, i+14).split("")) &&
    char1.push(comp[0][0]) && char2.push(comp[0][1]) && 
    char3.push(comp[0][2]) && char4.push(comp[0][3]) &&
    char5.push(comp[0][4]) && char6.push(comp[0][5]) && 
    char7.push(comp[0][6]) && char8.push(comp[0][7]) &&
    char9.push(comp[0][8]) && char10.push(comp[0][9]) && 
    char11.push(comp[0][10]) && char12.push(comp[0][11]) &&
    char13.push(comp[0][12]) && char14.push(comp[0][13]) && 
    comp[0].some((el) => {
      if(el.includes(char1[0])) {
        countChar1++
      }
      if(el.includes(char2[0])) {
        countChar2++
      }
      if(el.includes(char3[0])) {
        countChar3++
      }
      if(el.includes(char4[0])) {
        countChar4++
      }
      if(el.includes(char5[0])) {
        countChar5++
      }
      if(el.includes(char6[0])) {
        countChar6++
      }
      if(el.includes(char7[0])) {
        countChar7++
      }
      if(el.includes(char8[0])) {
        countChar8++
      }
      if(el.includes(char9[0])) {
        countChar9++
      }
      if(el.includes(char10[0])) {
        countChar10++
      }
      if(el.includes(char11[0])) {
        countChar11++
      }
      if(el.includes(char12[0])) {
        countChar12++
      }
      if(el.includes(char13[0])) {
        countChar13++
      }
      if(el.includes(char14[0])) {
        countChar14++
      }
    })
    if (
      countChar1 > 1 || 
      countChar2 > 1 || 
      countChar3 > 1 || 
      countChar4 > 1 ||
      countChar5 > 1 || 
      countChar6 > 1 || 
      countChar7 > 1 || 
      countChar8 > 1 ||
      countChar9 > 1 || 
      countChar10 > 1 || 
      countChar11 > 1 || 
      countChar12 > 1 ||
      countChar13 > 1 || 
      countChar14 > 1 
      ) {
      comp.splice(0)
      char1.splice(0)
      char2.splice(0)
      char3.splice(0)
      char4.splice(0)
      char5.splice(0)
      char6.splice(0)
      char7.splice(0)
      char8.splice(0)
      char9.splice(0)
      char10.splice(0)
      char11.splice(0)
      char12.splice(0)
      char13.splice(0)
      char14.splice(0)
      countChar1=0
      countChar2=0
      countChar3=0
      countChar4=0
      countChar5=0
      countChar6=0
      countChar7=0
      countChar8=0
      countChar9=0
      countChar10=0
      countChar11=0
      countChar12=0
      countChar13=0
      countChar14=0
    } else {
      return test2.indexOf(comp[0].join(""))+14
      // return (`
      // char1: ${char1} //
      // char2: ${char2} //
      // char3: ${char3} //
      // char4: ${char4} //
      // countChar1: ${countChar1} //
      // countChar2: ${countChar2} //
      // countChar3: ${countChar3} //
      // countChar4: ${countChar4} //
      // `)
      // return comp[0].join("")
    }
  }
  
}
const result2 = divideAndCheck2(test2);
console.log(result2);