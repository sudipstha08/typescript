"use strict";
// Function is a type in TS
// It allows us to descrbe which type of 
// function specifically we want to use somewhere
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ', +num); // TS inference implicitly infer its return type as void
}
printResult(add(2, 5));
// let combineValues: Function;
// combineValues = add;
// combineValues = 5;   // WRONG
// combineValues = printResult  // WRONG - will throw error at runtime
// To avoid this we can set a function type as below
var combineValues; // number on right side is return type
// combineValues = printResult  // WRONG - will throw error at runtime
// console.log(combineValues(8, 8));
// CALLBACKS
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 50, function (result) {
    console.log(result);
});
