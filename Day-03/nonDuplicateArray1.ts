import * as readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 const elements:number[]=[];
 rl.on('line',(line:any)=>{
    let numbers= line.split(' ');
    numbers.map((line: number)=>elements.push(line));
    rl.close();
});
rl.on("close",function(){
    let demo = new Set(elements);
    let nonDuplicateArray = Array.from(demo);
    console.log(`Array of Non-Duplicate Elements is:[${nonDuplicateArray}]`);
});