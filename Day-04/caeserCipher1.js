"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
function decodeCipher() {
    rl.question("Enter Your Encoded String:", (str) => {
        let decodedString = "";
        for (let i = 0; i < str.length; i++) {
            let element = str[i];
            let indexOfElement = alphabets.indexOf(element);
            //It Will Check Whether Entered Element is a part of an Array or not..!!
            if (indexOfElement >= 0) {
                decodedString += alphabets[(indexOfElement + 13) % 26];
            }
            // It will return non-alphabetic Elements as it is to the decodedString...
            else {
                decodedString = decodedString + element;
            }
        }
        console.log(`This is Your Decoded String: ${decodedString}`);
        rl.close();
    });
}
console.log("This is a Program to convert a Encoded String into Decoded String!!");
console.log("Please Enter All Characters in UpperCase Only!!");
console.log(" ");
//calling function from here..
decodeCipher();
