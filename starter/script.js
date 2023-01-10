// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = prompt("Please insert a number between 8 to 64");
  if (passwordLength < 8) {
    alert("Please insert a number between 8 to 64");
    return;
  }
  if (passwordLength > 64) {
    alert("Please insert a number between 8 to 64");
    return;
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  for (var i = 0; i < arr; i++) {
    var randomIndex = Math.floor(Math.random() * arr);
    var random = arr[randomIndex]; 
  }
  return random;
}
// Function to generate password with user input
function generatePassword() {
  getRandom([
    specialCharacters,
    upperCasedCharacters,
    lowerCasedCharacters,
    numericCharacters,
  ]);
  getPasswordOptions();
  var userSelection = [];
  
  var upperCaseLetters = confirm("Would you like UpperCase Letters in Your Password?");
  if (upperCaseLetters) {
    userSelection.push(upperCasedCharacters);
  }

  var lowerCaseLetters = confirm("Would you like LowerCase Letters in Your Password?");
  if (lowerCaseLetters) {
    userSelection.push(lowerCasedCharacters);
  }

  var symbols = confirm(
    "Would you like Special Characters in Your Password?"
  );
  if (symbols) {
    userSelection.push(specialCharacters);
  }

  var numbers = confirm("Would you like Numbers in Your Password?");
  if (numbers) {
    userSelection.push(numericCharacters);
  }
  if (
    lowerCaseLetters === false &&
    upperCaseLetters === false &&
    symbols === false &&
    numbers === false
  ) {
    alert("Please select at least one character from the list.");
    generatePassword();
  }
  return userSelection;
}


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
