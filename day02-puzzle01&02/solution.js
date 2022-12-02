const fs = require("fs");
const input = fs.readFileSync("input.txt").toString();


// Rock defeats Scissors
// Scissors defeats Paper 
// Paper defeats Rock
// If both players choose the same shape, the round instead ends in a draw
// 


const test = input
.split("\n")
// .map((el) => el.split(" ")) // für Aufgabe1

// const testInput = [[ 'B', 'Z' ], [ 'B', 'Z' ], [ 'B', 'Y' ], [ 'C', 'Y' ], [ 'B', 'Y' ]]



const game = (test) => {
  let player1 = 0;
  let player2 = 0;
  test.map((el) => {
    if (el[0] === "A" && el[1] === "Y") { // ROCK VS: PAPER  => PAPER WINS => 2 POINTS
      // player1 = player1+1
      // player2 = player2+8 
      player1 = player1+1
      player2 = player2+4
    } else if (el[0] === "A" && el[1] === "Z") { // ROCK VS: SCISSORS  => ROCK WINS => 1 POINT
      // player1 = player1+7
      // player2 = player2+3
      player1 = player1+7
      player2 = player2+8
    } else if (el[0] === "B" && el[1] === "X") { // PAPER VS: ROCK  => PAPER WINS => 2 POINT
      // player1 = player1+8
      // player2 = player2+1
      player1 = player1+8
      player2 = player2+1
    } else if (el[0] === "B" && el[1] === "Z") { // PAPER VS: SCISSORS  => SCISSORS WINS => 3 POINT
      // player1 = player1+2
      // player2 = player2+9
      player1 = player1+2
      player2 = player2+9
    } else if (el[0] === "C" && el[1] === "X") { // SCISSORS VS: ROCK  => ROCK WINS => 1 POINT
      // player1 = player1+3 
      // player2 = player2+7
      player1 = player1+3 
      player2 = player2+2
    } else if (el[0] === "C" && el[1] === "Y") { // SCISSORS VS: PAPER  => SCISSORS WINS => 3 POINT
      // player1 = player1+9
      // player2 = player2+2
      player1 = player1+9
      player2 = player2+9
    } else if (el[0] === "A" && el[1] === "X") {
      // player1 = player1+4
      // player2 = player2+4
      player1 = player1+4
      player2 = player2+2
    } else if (el[0] === "B" && el[1] === "Y") {
      // player1 = player1+5
      // player2 = player2+5
      player1 = player1+5
      player2 = player2+5
    } else if (el[0] === "C" && el[1] === "Z") {
      // player1 = player1+6
      // player2 = player2+6
      player1 = player1+6
      player2 = player2+7
    }
  })
  return [{resPl1: player1}, {resPl2: player2}]
}
// const result = game(test);

const result2 = test.map(game => {
  //DRAW
  if( game[0] === "A" && game[2] === "X" ){
    return 3+0
  }
  if(game[0] === "B" && game[2] === "Y"){
    return 2+3
  }
  if(game[0] === "C" && game[2] === "Z"){
    return 1+6
  }
  //LOSE
  if( game[0] === "A" && game[2] === "Z" ){
    return 2+6
  }
  if(game[0] === "B" && game[2] === "X"){
    return 1+0
  }
  if(game[0] === "C" && game[2] === "Y"){
    return 3+3
  }
  //WIN
  if( game[0] === "A" && game[2] === "Y" ){
    return 1+3
  }
  if(game[0] === "B" && game[2] === "Z"){
    return 3+6
  }
  if(game[0] === "C" && game[2] === "X"){
    return 2+0
  }
}).reduce((a,b)=> a+b, 0)

console.log(result2);
// console.log(test);