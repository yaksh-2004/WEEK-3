import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 function checkPalindrome(){
rl.question("Enter Your Input : ",(string)=>{
    let reverseString = string.split("").reverse().join("");
    if(string===reverseString)
    {
        console.log("Entered String is a Palindrome String..!");
    }
    else{
        console.log("Entered String is not a Palindrome String..!");
    }
    rl.close();
})
}
console.log("This is a Program to Check whether Entered String is a Palindrome or not..!!");
console.log(" ");
checkPalindrome();
