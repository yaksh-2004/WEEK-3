// used Readline module to take inputs from User..
const readline = require('readline');
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Stored all characters and converted into an array to get index of each Elements...
const alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
function decodeCipher(){
    rl.question("Enter Your Encoded String:",(str)=>{
    let decodedString="";
    for(let i=0;i<str.length;i++)
    {
        let element=str[i];
        let indexOfElement=alphabets.indexOf(element);
        //It Will Check Whether Entered Element is a part of an Array or not..!!
        if(indexOfElement>=0){
            decodedString+=alphabets[(indexOfElement+13)%26];
        }
        // It will return non-alphabetic Elements as it is to the decodedString...
        else{
          decodedString= decodedString+element;
        }
    }
    console.log(`This is Your Decoded String: ${decodedString}`);
    rl.close();
})
}  
console.log("This is a Program to convert a Encoded String into Decoded String!!");
console.log("Please Enter All Characters in UpperCase Only!!");
console.log(" ");
//calling function from here..
decodeCipher();