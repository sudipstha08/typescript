"use strict";
var userInput;
var userName;
userInput = 5;
userInput = "string";
// Any is most flexible in TS and unknown is bit more restrictive
// Diff betn any and unknown is unknown cant be assigned to another type
// userName = userInput; 
// if(typeof userInput === 'string') {
//   userName  = userInput
// }
// never type never returns anything
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An Error Occured!', 500);
