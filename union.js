"use strict";
// Union allows you to accept two kind of values
function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 == 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26);
var combinedNames = combine('Sudip', 'Stha');
console.log(combinedAges);
console.log(combinedNames);
