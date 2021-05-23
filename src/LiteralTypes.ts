// Union allows you to accept two kind of values

function combine(
  input1: number | string,
  input2:number | string,
  resultConversion: 'as-number' | 'as-text'   // UNION types combined with literal types
  ) {   
  let result;

  if(typeof input1 === 'number'  && typeof input2 == 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2 
  } else {
    result = input1.toString() + input2.toString()
  }
  return result
}

const combinedAges = combine(30, 26, 'as-number');
const combinedAgesStr = combine('30', '26', 'as-number');
const combinedNames = combine('Sudip', 'Stha', 'as-text')

console.log(combinedAges)
console.log(combinedAgesStr)
console.log(combinedNames)