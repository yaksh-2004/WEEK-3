const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
const elements = [];
rl.on('line',(line)=>{
    let numbers= line.split(' ');
    numbers.map(line=>elements.push(line));
    rl.close();
});
rl.on("close",function(){
    let demo = new Set(elements);
    let nonDuplicateArray = Array.from(demo);
    console.log(`Array of Non-Duplicate Elements is:[${nonDuplicateArray}]`);
});
