// Assignment Code
var generateBtn = document.querySelector("#generate");
var specials = '!@#$%^&*()_+{}:"<>?\|[];\',./`~';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var passwordLength = prompt("How many characters do you want in a password?", "From 8 to 128 characters")
// Write password to the #password input
function writePassword() {
  if (confirm("Do you want to generate a password?")){
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    if (passwordLength == null || passwordLength == "" ){

    } else {
      
    }

  }else {
    return
  }


  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

