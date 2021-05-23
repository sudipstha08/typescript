"use strict";
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
var person = {
    name: 'Sudip',
    age: 25,
    hobbies: ['football', 'basketball'],
    role: 'ADMIN'
};
// person.role.push('admin');
// person.role[1] = 10; Not allowed
// person.role = [0, 'admin']  // allowed
// person.role = [0, 'admin', 'ar']  //not allowed
var favActivities; // means it is array of strings
var favActivitiesAny; // means it is array of any types and must reduce its usage
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
