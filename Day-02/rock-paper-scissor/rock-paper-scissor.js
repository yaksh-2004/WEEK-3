//importing a readline module to take input from user in CLI..
const readLine = require("readline");
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//created an array of available choices to Do a Move..
let choices = ["rock", "paper", "scissor"];
// This will choose a random value from an array..
let randomChoices = choices[Math.floor(Math.random() * choices.length)];
//created variables to maintain User and Computer Wins..
let count_User = 0,count_Comp = 0,flag = 0;
// This is a function which contains main logic behind the game..
function gameOn() {
  rl.question("Do Your Move:", (userInput) => {
    let UserInput = userInput.toLocaleLowerCase();
    if (
      UserInput === "rock" ||
      UserInput === "paper" ||
      UserInput === "scissor"
    ) {
    // if both inputs are same..
      if (UserInput === randomChoices) {
        console.log(randomChoices);
        console.log("Play Again!");
        console.log(
          `User Points : ${count_User}  Computer Points : ${count_Comp}`
        );
        gameOn();
        //comparison logic..
      } else if (
        (UserInput === "paper" && randomChoices === "rock") ||
        (UserInput === "rock" && randomChoices === "scissor") ||
        (UserInput === "scissor" && randomChoices === "paper")
      ) {
        console.log(randomChoices);
        count_User++;
        console.log(
          `User Points : ${count_User}  Computer Points : ${count_Comp}`
        );
        if (count_User === 3 || count_Comp === 3) {
          console.log("User won!!");
          flag = 1;
        }
        gameOn();
      } else {
        console.log(randomChoices);
        count_Comp++;
        console.log(
          `User Points : ${count_User}  Computer Points : ${count_Comp}`
        );
        if (count_User === 3 || count_Comp === 3) {
          console.log("User Lost");
          flag = 1;
        }
        gameOn();
      }
      if (flag == 1) {
        rl.close();
      }
    } 
    //handled edge case...
    else {
      console.log("Enter a valid input");
      return gameOn();
    }
  });
}

// Entered Rules of the Game for Users Convenince...
console.log("This is a Rock-Paper-Scissor Game!!");
console.log(
  "--------------------------------------------Rules of the Game----------------------------------------------------------------------"
);
console.log(
  "It is a 5 Point Match , Whoever will score 3 Points first will Win the match"
);
console.log(" 1->  You Can Choose Your Move from rock,paper,scissor");
console.log(
  " 2->  If You and Computer Both Have selected Same Move You will be shown : Play Again!"
);
console.log(" 3->  Rock is Stronger than Scissor,Paper is Stronger than Rock");
console.log(" 4->  Scissor is Stronger than Paper");
console.log(" ");
if (flag == 1) {
  rl.close();
}
gameOn();
