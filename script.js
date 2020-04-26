// Assignment Code
var generateBtn = document.querySelector("#generateBtn");
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
    var passwordLength = prompt("Enter the number of characters you want for the password. (8-128 characters)");
    var lowerCase = confirm("Do you want lowercase letters in your password?");
    var upperCase = confirm("Do you want upper case letters in your password?");
    var numbers = confirm("Do you want to include numbers?");
    var minimumCount = 0;
    var minimumLowerCase = "";
    var minimumUpperCase = "";
    var minimumNumbers = "";

    var functionArray = {
        getLowerCase: function() {
            return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
        },
        getUpperCase: function() {
            return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
        },
        getNumbers: function() {
            return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
        },
       
    };

        if (lowerCase ===true) {
            minimumLowerCase = functionArray.getLowerCase();
            minimumCount++;
        }
        if (upperCase ===true) {
            minimumUpperCase = functionArray.getUpperCase();
            minimumCount++;
        }
        
        if (numbers ===true) {
            minimumNumbers = functionArray.getNumbers();
            minimumCount++;
        }
        
    var randomPasswordGenerated = "";
        for (let i=0; i < (parseInt(passwordLength) - minimumCount); i++) {
            var randomNumberPicked = Math.floor(Math.random() * 4);
            randomPasswordGenerated += randomNumberPicked;
        }

        randomPasswordGenerated += minimumLowerCase;
        randomPasswordGenerated += minimumUpperCase;
        randomPasswordGenerated += minimumNumbers;

        return randomPasswordGenerated;
    




}