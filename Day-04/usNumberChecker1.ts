import * as readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function usNumberChecker():void{
    rl.question("Enter Your Phone Number: ",(number:string)=>{
       let regexExpression = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-])?\d{3}([\s\-])?\d{4}$/
       console.log(regexExpression.test(number));
       rl.close();
})
    }
    usNumberChecker(); 

    