// Assignment Code
var generateBtn = document.querySelector("#generate");
var specials = '!@#$%^&*()_+{}:"<>?\|[];\',./`~';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
// Write password to the #password input
function writePassword() {
  // if writePassword = true
  if (confirm("Do you want to generate a password?")){ 
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    var passwordLength = prompt("How many characters do you want in a password?", "From 8 to 128 characters")
   
    

  }
  // if writePasword = false
  else {
    return
  }


  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

