// Assignment Code

// Define global variables:
var generateBtn = document.querySelector("#generate");
var characterLength = [];
var choiceArray = [];
var specialCharacterArray = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

// function for getting prompts from the user:
function getPromptsFromUser() {
  choiceArray = [];
  var userInput = window.prompt("How many characters would you like in your password. (Please choose a value between 8 and 128)");
  characterLength = parseInt(userInput);
  if (characterLength < 8 || characterLength > 128) {
    window.alert("Character length has to be between 8 and 128 digits. Please try again ");
    return false;
  }

  if (confirm("Would you like lower case letters in your password?")) {
    choiceArray = choiceArray.concat(lowerCaseArray);
  }
  if (confirm("Would you like upper case letters in your password?")) {
    choiceArray = choiceArray.concat(upperCaseArray);
  }
  if (confirm("Would you like special characters in your password?")) {
    choiceArray = choiceArray.concat(specialCharacterArray);
  }
  if (confirm("Would you like numbers in your password?")) {
    choiceArray = choiceArray.concat(numberArray);
  }
  return true;
}

// generate password function:
function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length)
    password = password + choiceArray[randomIndex];
  }
  return password;
}

// Write password function password function:
function writePassword() {
  var promptsVerified = getPromptsFromUser();
  var passwordText = document.querySelector("#password");
  if (promptsVerified = true) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
