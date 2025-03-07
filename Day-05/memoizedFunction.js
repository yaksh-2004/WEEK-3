const readline = require('readline');

//Created Functions to be called...
function sum(a, b) {
    return a + b;
}
function fibonacci(number) {
    if (number <= 1) {
        return 1;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}
function factorial(number) {
    if (number===0||number===1) {
        return 1;
    }
    return number *factorial(number - 1);
}

//Creating readline Interface for taking Input from User..
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//Given Prompt Message for User's Convenience..
console.log("You Can Choose One Function From Sum,Fibonacci,Factorial!!");
console.log("You Can Enter Your Actions by Differenciating with Comma");
console.log("You Can Enter values by Differenciating with Comma");

// Function selection ..
rl.question('Enter One Function From sum,fibonacci,factorial : ', function(func) {
    const options = { 
                     sum: sum, 
                     fibonacci:fibonacci, 
                     factorial: factorial 
                   };
    
    if (!options.hasOwnProperty(func)) {
        console.log('This is Invalid Function..');
        rl.close();
        return;
    }
    //Get actions from the user
    rl.question('You Can Select Actions From call & getCallCount : ', function (actions) {
        const possibleActions = actions.split(',');
        let ans = [];
        let listOfArguments = [];

        // Take inputs for call actions..
        function getValues(indexOfElement) {
            if (indexOfElement >= possibleActions.length) {
                 // Perform all actions after getting inputs..
                performActions();
                return;
            }

            let action = possibleActions[indexOfElement].trim();
            
            if (action === "call") {
                rl.question('Enter values in Comma Separated Manner: ', function (args) {
                    let argumentArray = args.split(',');
                    for (let i = 0; i < argumentArray.length; i++) {
                        argumentArray[i] = parseInt(argumentArray[i], 10);
                    }
                    listOfArguments.push(argumentArray);
                    getValues(indexOfElement + 1);
                });
            } else {
                getValues(indexOfElement + 1);
            }
        }
        function memoize(fn) {
            // Stores alreadyFounded answer in cache..
            const cache = {}; 
            //Used to Check whether Call hasbeen made before or not..
            let callCount = 0;
            return {
                call:function () {
                    let key = "";
                    for (let i = 0; i < arguments.length; i++) {
                        key += arguments[i];
                        if (i !== arguments.length - 1) {
                            key += ",";
                        }
                    }
                    
                    if (cache.hasOwnProperty(key)) {
                        // Return cached result
                        return cache[key];
                    } else {
                        // Compute result
                        let result = fn.apply(null, arguments); 
                        // Store in cache
                        cache[key] = result; 
                        callCount++; 
                        return result;
                    }
                },
                getCallCount:function () {
                    return callCount; 
                }
            };
        }
        const memoizedFn = memoize(options[func]);
        // Action Handling from Here...
        function performActions() {
            for (let i = 0, j = 0; i < possibleActions.length; i++) {
                let action = possibleActions[i].trim();

                if (action === 'call') {
                    let args = listOfArguments[j++];
                    ans.push(memoizedFn.call.apply(null, args));
                } else if (action === 'getCallCount') {
                    ans.push(memoizedFn.getCallCount());
                } else {
                    console.log('Invalid action:', action);
                }
            }

            console.log('Answer is :', ans);
            rl.close();
        }
        
  let indexOfElement=0;
        getValues(indexOfElement);
    });
});
