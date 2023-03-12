// Define the possible characters for the password
var passwordCharacters = {
  upperCasecharacters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCasecharacters: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  specialCharacters: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
};

// Prompt the user for the password length
function getPasswordLength() {
  var passwordLength = parseInt(prompt("Enter the desired password length (must be between 8 and 128 characters)"));
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return getPasswordLength();
  }
  return passwordLength;
}

// Prompt the user for password criteria
function getPasswordCriteria() {
  var useUpperCase = confirm("Include uppercase letters?");
  var useLowerCase = confirm("Include lowercase letters?");
  var useNumbers = confirm("Include numbers?");
  var useSpecialCharacters = confirm("Include special characters?");

  if (!useUpperCase && !useLowerCase && !useNumbers && !useSpecialCharacters) {
    alert("Please select at least one type of character to include in the password.");
    return getPasswordCriteria();
  }

  return {
    useUpperCase: useUpperCase,
    useLowerCase: useLowerCase,
    useNumbers: useNumbers,
    useSpecialCharacters: useSpecialCharacters
  };
}

// Generate the password based on user input
function generatePassword() {
  var passwordLength = getPasswordLength();
  var passwordCriteria = getPasswordCriteria();
  var availableCharacters = "";
  var password = "";

  if (passwordCriteria.useUpperCase) {
    availableCharacters += passwordCharacters.upperCasecharacters;
  }
  if (passwordCriteria.useLowerCase) {
    availableCharacters += passwordCharacters.lowerCasecharacters;
  }
  if (passwordCriteria.useNumbers) {
    availableCharacters += passwordCharacters.numbers;
  }
  if (passwordCriteria.useSpecialCharacters) {
    availableCharacters += passwordCharacters.specialCharacters;
  }

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * availableCharacters.length);
    password += availableCharacters[randomIndex];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

