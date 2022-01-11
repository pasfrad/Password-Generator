// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var passwordLength = "0";
  var includeLowercase = "bananas";
  var includeUppercase = "oranges"
  var includeNumbers = "strawberries"
  var includeSpecials = "raspberries"
  
  while (passwordLength < 8 || passwordLength > 120){
    passwordLength = window.prompt("Enter password length from 8 to 120");
  }

  while (includeLowercase !== "y" && includeLowercase !== "n"){
    includeLowercase = window.prompt("Include lowercase characters? Enter y/n")
  }

  while (includeUppercase !== "y" && includeUppercase !== "n"){
    includeUppercase = window.prompt("Include uppercase characters? Enter y/n")
  }

  while (includeNumbers !== "y" && includeNumbers !== "n"){
    includeNumbers = window.prompt("Include numeric characters? Enter y/n")
  }

  while (includeSpecials !== "y" && includeSpecials !== "n"){
    includeSpecials = window.prompt("Include special characters? Enter y/n")
  }

  if (includeLowercase == "n", includeUppercase == "n", 
    includeNumbers == "n", includeSpecials == "n"){
      window.prompt("Invalid input")
      return
    }


  var password = generatePassword(passwordLength, includeLowercase, includeUppercase, 
    includeNumbers, includeSpecials);
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

document.getElementById("password").innerHTML = password;

}

function generatePassword(passwordLength, includeLowercase, includeUppercase, 
  includeNumbers, includeSpecials){
    console.log(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSpecials)
    var allCharacters = "";
    var password = "";
    if (includeLowercase === "y") {
      allCharacters = allCharacters + "abcdefghijklmnopqrstuvwxyz"
    }
    if (includeUppercase === "y") {
      allCharacters = allCharacters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if (includeNumbers === "y") {
      allCharacters = allCharacters + "1234567890"
    }
    if (includeSpecials === "y") {
      allCharacters = allCharacters + "!@#$%^&*()_+"
    }
    console.log("characters="+allCharacters)
    for (let i = 0; i < passwordLength; i++){
      var index = Math.floor(Math.random() * allCharacters.length);
      password = password + allCharacters[index]
      console.log("index="+index)
    }
    console.log("password="+password)
    return password
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
