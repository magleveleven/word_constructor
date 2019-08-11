var inquirer = require("inquirer");

var wordList = [ "alf", "elf", "half", "whole"];
console.log(wordList);

var randNum = Math.floor(Math.random() * wordList.length);
console.log(randNum);

var gw = wordList[randNum];
console.log(gw);

var underScore = [];

function genUnderScore()  {
    for(i=0; i<gw.length; i++) {
        underScore.push("_");
    }
    return underScore;
}
    console.log(genUnderScore());



let aString = underScore.toString(" ");
console.log(aString);

let newUnderscores = maString.split(" ");
console.log(newUnderscores);

inquirer
  .prompt([
    {
      type: "input",
      message: "Which letter would you like to guess",
      name: "letterguess"
    },
    ])
      .then(function(inquirerResponse) {
        if (inquirerResponse.letterguess) {
          console.log("\nYou guessed the letter " + inquirerResponse.letterguess);
        }

      });

// inquirers
// constructors 
// callbacks 



