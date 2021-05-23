// Union allows you to accept two kind of values

function combine(input1: number | string, input2:number | string) {   
  let result;

  if(typeof input1 === 'number'  && typeof input2 == 'number') {
    result = input1 + input2 
  } else {
    result = input1.toString() + input2.toString()
  }
  return result
}

const combinedAges = combine(30, 26);
const combinedNames = combine('Sudip', 'Stha')

console.log(combinedAges)
console.log(combinedNames)