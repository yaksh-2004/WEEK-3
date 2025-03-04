//This function will give us random number between 0 to 100..
let number = Math.floor(Math.random()*100)+1;
//initializing a variable for maintaing userattempts..
let userAttempt=0;
//importing a readline module to take input from user in CLI..
const readLine=require('readline');
const rl = readLine.createInterface({
    input:process.stdin,
    output:process.stdout,});
//Created function for number taking & validating..
function guessNumber() {
  rl.question("Enter a Number Between 0 to 100 :",(input)=>{
    let userInput = parseInt(input);
    userAttempt++;
//Provided a condition to handle Edge-cases..
  if(userInput<0||userInput>100||userInput==NaN)
  {
    console.log("Please Provide a Valid Number!");
    //we want continuos calling that's why we have call this function here..
    guessNumber();
  }

  else if(number>userInput){
    console.log("Entering too Low Number!!");
     //we want continuos calling that's why we have call this function here..
    guessNumber();
   
  }
  else if(number<userInput){
    console.log("Entering too High Number!!");
    //we want continuos calling that's why we have call this function here..
    guessNumber();

  }
  else{
    console.log(`You Have Guessed Number Right!!! in ${userAttempt} attempts..`);
        rl.close();
  }
})
}
//Provided Rules of the game for User's Convenience..
console.log("This is a Number Guessing Game!!");
console.log("--------------------------------------------Rules of the Game----------------------------------------------------------------------")
console.log("1->Enter a Number Between 0 to 100");
console.log("2->If you will Enter a Number Lesser than computer's Number You will be shown : Entering too Low Number!!");
console.log("3->If you will Enter a Number Higher than computer's Number You will be shown : Entering too High Number!!");
console.log("4->If you will Enter a Number Less than 0 or number greater than 100 or NaN You will be shown : Please Provide a Valid  Number!");
console.log("5->If you would Guess a Right Number You will be shown : You Have Guessed Number Right!!! in ${userAttempt} attempts..");
console.log(" ");

//calling from here..
guessNumber();
