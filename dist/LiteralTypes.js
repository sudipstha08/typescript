"use strict";
// Union allows you to accept two kind of values
function combine(input1, input2, resultConversion // UNION types combined with literal types
) {
    var result;
    if (typeof input1 === 'number' && typeof input2 == 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26, 'as-number');
var combinedAgesStr = combine('30', '26', 'as-number');
var combinedNames = combine('Sudip', 'Stha', 'as-text');
console.log(combinedAges);
console.log(combinedAgesStr);
console.log(combinedNames);
