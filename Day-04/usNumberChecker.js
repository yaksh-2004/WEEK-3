const readline = require('readline');
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function usNumberChecker(){
    rl.question("Enter Your Phone Number: ",(number)=>{
       let regexExpression = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-])?\d{3}([\s\-])?\d{4}$/
       console.log(regexExpression.test(number));
       rl.close();
})
    }
    usNumberChecker(); 
  