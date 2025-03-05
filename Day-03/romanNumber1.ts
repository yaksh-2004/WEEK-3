import * as readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
interface demo{
      [key:string]:number
}
let romanValue = "";
function romanConvertor() {
    rl.question("Enter Your Number : ",(num)=>{
        let number = Number(num);
    const romanList : demo = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    }
    if(number<=0){
        console.log("You Can't Enter This!!");
        console.log("Enter a Number Between 1 to 1000");
        console.log(" "); 
       return romanConvertor();
    }
   for(const key in romanList){
    while(number>=romanList[key])
    {
        romanValue=romanValue+key;
        number =number-romanList[key];
    }
   }
   console.log(romanValue);
   rl.close();
    });
}
console.log("This is a Program to convert a Integer to Roman..!")
  romanConvertor();
