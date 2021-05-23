// const person: {   // TS representation of the object types
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {                 // BETTER SYNTAX
//   name: 'Sudip',
//   age: 25,
//   hobbies: ['football', 'basketball'],
//   role: [2, 'author']
// }


const person = {
    name: 'Sudip',
    age: 25,
    hobbies: ['football', 'basketball'],
    role: 'ADMIN'
  }
  

// person.role.push('admin');
// person.role[1] = 10; Not allowed
// person.role = [0, 'admin']  // allowed
// person.role = [0, 'admin', 'ar']  //not allowed

let favActivities: string[];     // means it is array of strings
let favActivitiesAny: any[];     // means it is array of any types and must reduce its usage
console.log(person.name)

for(const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}