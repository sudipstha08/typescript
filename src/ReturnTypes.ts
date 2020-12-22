function add(n1: number, n2: number): number {    // EXPLICITELY assign a return type
  return n1 + n2;                                 // TS automatically assign return type 
}                                                // if not assigned

// It is better to let TS implicitely infer the return type

function printResult(num: number) {   // Its return type is void
  console.log('Result: ', + num);  // TS inference implicitly infer its return type as void
}

function printResultVoid(num: number): void {  
  console.log('Result: ', + num); 
}

printResult(add(2, 5));
console.log(printResult(add(2, 5)));  // undefined as in js undefined is also a value

// undefined is a valid type in TS
let someValue: undefined;