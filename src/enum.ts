// const ADMIN = 0;                // it is better to use enum for this
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR }  //default  // ENUM usallu is upper case
// enum Role { ADMIN=5, READ_ONLY, AUTHOR }   // ASSIGN OTHER VALUES TO ENUM
// enum Role { ADMIN=5, READ_ONLY=100, AUTHOR=200 }   // ASSIGN OTHER VALUES TO ENUM(CUSTOM VALUES TO ALL)
// enum Role { ADMIN=5, READ_ONLY='READ_ONLY', AUTHOR=200 }   // ASSIGN OTHER VALUES TO ENUM (mix)

const person = {
  name: 'Sudip',
  age: 25,
  hobbies: ['football', 'basketball'],
  role: Role.ADMIN
}

if (person.role === Role.AUTHOR) {
  console.log('is Author');
}