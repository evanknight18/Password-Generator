// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordCharacters = {
  upperCasecharacters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCasecharacters: "abcdefghijklmnopqrstuvwxyz",
  numbers: "1234567890",
  specialCharacters: "!@#$%^&*(),./<>?~`;':",
};

function generatePassword() {
  var enterPassword = prompt("Enter your password") 

  if (passwordText = passwordCharacters.upperCasecharacters) {
    prompt("Yes");
  } else {
    prompt("No");
  }

};  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


console.log(passwordCharacters.upperCasecharacters);
