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

// create an equation that creates a random char at the desired length and char types
function password(){
  // Save the return value from the prompts
  var charLengthPrompt =prompt("How many charcters do you want in your password? Enter a number 8-128.");
  if (!(charLengthPrompt >= 8 && charLengthPrompt <= 128)){
    return password();
    }
  // Password length
  var length = ;
  
  // Password preferences (0 for no, 1 for yes)
  var lowerCase = 0;
  var upperCase = 0;
  var numeric = 0;
  var special = 0;
  

}




// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
