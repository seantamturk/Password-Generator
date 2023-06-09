// on click give prompt "password length"
// enter desired number (8-128)

// confirm box "do you want lowercase"
//on okay, add lowercase char to the password
//on cancel do not add

// confirm box "do you want uppercase"
//on okay, add uppercase char to the password
//on cancel do not add

// confirm box "do you want numeric"
//on okay, add numeric char to the password
//on cancel do not add 

// confirm box "do you want special char"
//on okay, add special char to the password
//on cancel do not add 

// take all desired char types and add them to an array

// create an equation that creates a random password at the desired length and can use any of the preffered character typeschar types

// Links password generator function to the button event
generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", passwordgenerator);

// Password generator
function passwordgenerator(){
  
  // Password length
  var length = prompt("How many charcters do you want in your password? Enter a number 8-128.");
    if (!(length >= 8 && length <= 128)){
      alert("Character length must be between 8 and 128");
      return password();
      }
  
  // confirm box for lower case
  var promptLowerCase = confirm("Do you want lower case characters in your password?");
    if (promptLowerCase){
              var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      
    }
    else{
      var lowerCase = [];
    }
  
  // Confirm box for upper case
  var promptUpperCase = confirm("Do you want upper case characters in your password?");
    if (promptUpperCase){
              var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            }
    else{
      var upperCase = [];
    }
  // confirm box for  
  var promptNumeric = confirm("Do you want numeric characters in your password?");
    if (promptNumeric){
              var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    }
    else{
      var numeric = [];
    }
    // confirm box for special 
var promptSpecial = confirm("Do you want special characters in your password?");
    if (promptSpecial){
              var special = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
    }
    else{
      var special = [];
    }

// Combines selected arrays 
const charUsed = lowerCase.concat(upperCase, numeric, special);

// Where the magic happens (generates password from user-created array)
var password = ""
for (var i = 0; i < length; i++){
  var randomChar = charUsed[Math.floor(Math.random() * charUsed.length)];
  password += randomChar;

password.split('').some(function(char) {
  return lowerCase.includes(char);
}) 
  && password.split('').some(function(char) {
  return upperCase.includes(char);
}) 
  && password.split('').some(function(char) {
  return numeric.includes(char);
}) 
  && password.split('').some(function(char) {
  return special.includes(char);
})

}
// test
console.log("Your password is: " + password);

// Writes password to screen
  function myWritePassword() {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

  }
  myWritePassword()
}



