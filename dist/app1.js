"use strict";
function add(n1, n2, showResult, phrase) {
    // if(typeof n1 !== 'number' || typeof n2 !== 'number') {
    //   throw new Error('Incorrect input')
    // }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
// let num3: number;
var number1 = 6;
var number2 = 2.5;
var printResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
// const result = add(number1, number2, printResult, resultPhrase);
// console.log(result);
