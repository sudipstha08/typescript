// const ADMIN = 0;                // it is better to use enum for this
// const READ_ONLY = 1;
// const AUTHOR = 2;

// enum Role { ADMIN, READ_ONLY, AUTHOR }  //default  // ENUM usally is upper case
enum Role { ADMIN="ff", READ_ONLY=1, AUTHOR }   // ASSIGN OTHER VALUES TO ENUM
// enum Role { ADMIN=5, READ_ONLY=100, AUTHOR=200 }   // ASSIGN OTHER VALUES TO ENUM(CUSTOM VALUES TO ALL)
// enum Role { ADMIN=5, READ_ONLY='READ_ONLY', AUTHOR=200 }   // ASSIGN OTHER VALUES TO ENUM (mix)

const person2 = {
  name: 'Sudip',
  age: 25,
  hobbies: ['football', 'basketball'],
  role: Role.ADMIN
}

if (person2.role == Role.ADMIN) {
  console.log('is Author');
}

console.log("enum",  Role)