/* The first block defines the possible characters for the password
  using properties in an object. Each property is a string
  containing different sets of characters */
var passwordCharacters = {
  upperCasecharacters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCasecharacters: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  specialCharacters: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
};

/* The next block defines the function for the password length.
  The user will be prompted to enter the desired length and this input will parse the integer.
  The if statement is looking to see if they entered either a non-number or a number outside the required range.
  This process will loop until the user enters valid data.
  */
function getPasswordLength() {
  var passwordLength = parseInt(prompt("Enter the desired password length (must be between 8 and 128 characters)"));
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return getPasswordLength();
  }
  return passwordLength;
};

/* Here, the function prompts the user to select the criteria to include in the password.
They will be given the choice of the above properties, i.e., upper case, lower case, numbers, or special characters.
The user must select one or all of these otherwise 
the function will circle back to the beginning of function and they must select the valid options */
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
};

/* This function will generate the password based on user input */
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
};

/* This block of code calls to the generatePassword function and generates the password */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

/* Add event listener to generate button */
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
