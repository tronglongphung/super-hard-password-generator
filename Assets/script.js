// Assignment Code
var generateBtn = document.querySelector("#generate");
const specials = ["!","@","#","$","%","^","&","*","(",")","_","+"];
const lowercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] 
const uppercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["0","1","2","3","4","5","6","7","8","9"];

var passwordSelection = ""


function generatePassword() {
  var passwordLengthRaw = prompt("How many characters do you want in a password (8 - 128)?", "")
  var passwordLength = parseInt(passwordLengthRaw);
  if (!passwordLengthRaw || passwordLength < 8 || passwordLength > 128 ) {
    return alert('Password length not correct');
  } 
  
// console logs each line to see if the code is working correctly.
  if (confirm("Do you want special characters")){
    passwordSelection = specials;
    console.log(passwordSelection)
    console.log(password)
  } else {
    passwordSelection = passwordSelection;
  }

  if(confirm("Do you want lowercase characters")){
    passwordSelection = passwordSelection.concat(lowercase);
    console.log(passwordSelection)
  } else {
    passwordSelection = passwordSelection;
    console.log(passwordSelection)
  }

  if(confirm("Do you want uppercase characters")){
    passwordSelection = passwordSelection.concat(uppercase);
    console.log(passwordSelection)
  } else {
    passwordSelection = passwordSelection;
    console.log(passwordSelection)
  }

  if (confirm("Do you want numbers")){
    passwordSelection = passwordSelection.concat(numbers);
    console.log(passwordSelection)
  } else {
  passwordSelection = passwordSelection;
  console.log(passwordSelection)
  }
  password = ''
// this is a loop
  for (let index = 0; index < passwordLength; index++) {
    // make character set array from accepted characters
    // calculate random index of full array 
    password += passwordSelection[Math.floor(Math.random() * passwordSelection.length)]
    
    console.log(password);
    
  }
  return password
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

