// Assignment Code
var generateBtn = document.querySelector("#generate");
var specials = ["!","@","#","$","%","^","&","*","(",")","_","+"];
var lowercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] 
var uppercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];

function generatePassword() {
  var passwordLengthRaw = prompt("How many characters do you want in a password?", "From 8 to 128 characters")
  var passwordLength = parseInt(passwordLengthRaw);
  if (!passwordLengthRaw || passwordLength < 8 || passwordLength > 128 ) {
    alert('Password length not correct');
  }
  


  for (let index = 0; index < passwordLength; index++) {
    // make character set array from accepted characters
    // calculate random index of full array 
    
  }

}

// Write password to the #password input
function writePassword() {
  if (!confirm("Do you want to generate a password?")){ 
    return;
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

