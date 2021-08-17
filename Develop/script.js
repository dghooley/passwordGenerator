// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var num = "1234567890";
  var specialChar = "!@#$%^&*()_+={}|[]:;<>,.?";
  var allChoices = "";

  var passLength = parseInt(window.prompt("Please choose a number between 8 and 20 for the amount of characters you would like in your password."));
  var smallLetters = window.confirm("Would you like lowercase letters in your password?");
  var bigLetters = window.confirm("Would you like uppercase letters in your password?");

  console.log("PASSWORD LENGTH", passLength);
  console.log("SMALL LETTERS ", smallLetters);

  if(passLength < 8 || passLength > 20){
    alert("Please choose a number between 8 and 20");
  } else{

    if(smallLetters === true){
      allChoices += lowerCase
    }

    if(bigLetters === true){
      allChoices += upperCase
    }
    console.log("ALL CHOICES", allChoices)

  }



  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword );


