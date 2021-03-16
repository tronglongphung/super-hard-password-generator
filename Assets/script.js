// Assignment Code
var generateBtn = document.querySelector("#generate");
var specials = '!@#$%^&*()_+{}:"<>?\|[];\',./`~';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';

// Write password to the #password input
function writePassword() {
  
while(confirm(writePassword)){
  'Do you want to create a password?'
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

