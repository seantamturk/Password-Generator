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
  
  // Password preferences (0 for no, 1 for yes)
  var lowerCase = 0;
  var upperCase = 0;
  var numeric = 0;
  var special = 0;
  
  // Password length
  var length = prompt("How many charcters do you want in your password? Enter a number 8-128.");
    if (!(length >= 8 && length <= 128)){
      alert("Character length must be between 8 and 128");
      return password();
      }
  
  var promptLowerCase = confirm("Do you want lower case characters in your password?");
      if (true){
        lowerCase++
      }
  
  var promptUpperCase = confirm("Do you want upper case characters in your password?");
      if (true){
        upperCase++
      }
      
  var promptNumeric = confirm("Do you want numeric characters in your password?");
      if (true){
        numeric++
      }
      
  var promptspecial = confirm("Do you want special characters in your password?");
      if (true){
        special++
      }
  
  
}

password();




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
