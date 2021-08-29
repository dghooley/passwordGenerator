// Classes for references to the #generate element
var generateBtn = document.querySelector("#generate");
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var numberChar = "1234567890";
var specialChar = "!@#$%^&*()_+={}|[]:;<>,.?";
var passLength;
var upperCaseConfirm;
var numberConfirm;
var specialCharConfirm;

// Asking user to choose number of characters for password length
function findPasswordLength() {
  passLength = prompt("Please choose a number between 8 and 128 for the amount of characters you would like in your password): ");
  if (passLength<8) {
    alert("Password must be a number between 8 and 128 characters");
    findPasswordLength();
  }else if (passLength>128){
    alert("Password must be a number between 8 and 128 characters");
    findPasswordLength();
  }else if (isNaN(passLength)){
    alert("Password mush be a number between 8 and 128 characters"); 
  }
  return passLength;
}

// Asking user to decide on whether or not to use uppercase letters
function findUpperCase(){
  upperCaseConfirm = prompt("Do you want to include uppercase letters in your password? (YES or NO)");
  upperCaseConfirm = upperCaseConfirm.toLowerCase();
  if (upperCaseConfirm === null || upperCaseConfirm === ""){
    alert("Please select YES or NO");
    findUpperCase();
  }else if (upperCaseConfirm === "yes" || upperCaseConfirm ==="y"){
    upperCaseConfirm = true
    return upperCaseConfirm
  }else if (upperCaseConfirm === "no" || upperCaseConfirm === "n"){
    upperCaseConfirm = false;
    return upperCaseConfirm;
  }else {
    alert("Please select YES or NO");
    findUpperCase();
  }
  return upperCaseConfirm;
}

// Asking user for input on whether or not to include numbers
function findNumbers(){
  numberConfirm = prompt("Do you want to include numbers in your password? (YES or NO)");
  numberConfirm = numberConfirm.toLowerCase();
  if (numberConfirm === null || numberConfirm === ""){
    alert("Please select YES or NO");
    findNumbers ();
  }else if (numberConfirm === "yes" || numberConfirm === "y"){
    numberConfirm = true;
    return numberConfirm;
  }else if (numberConfirm === "no" || numberConfirm === "n"){
    numberConfirm = false;
    return numberConfirm;
  }else {
    alert("Please select YES or NO");
    findNumbers();
  }
  return numberConfirm;
}

// Asking user for input on whether or not to include special characters
function findSpecial(){
  specialCharConfirm = prompt("Do you want to include special characters in your password? (YES or NO");
  specialCharConfirm = specialCharConfirm.toLowerCase();
  if (specialCharConfirm === null || specialCharConfirm === ""){
    alert ("Please select YES or NO");
    findSpecial();
  }else if (specialCharConfirm === "yes" || specialCharConfirm === "y"){
    specialCharConfirm = true;
    return specialCharConfirm;
  }else if (specialCharConfirm === "no" || specialCharConfirm === "n"){
    specialCharConfirm = false;
    return specialCharConfirm;
  }else {
    alert ("Please select YES or NO");
    findSpecial();
  }
  return specialCharConfirm;
}

// Random password generator using input from all of the functions listed above and their respective outputs 
function generatePassword(){
  findPasswordLength();
  console.log(passLength);
  findUpperCase();
  console.log(upperCaseConfirm);
  findNumbers();
  console.log(numberConfirm);
  findSpecial();
  console.log(specialCharConfirm);

  var characters = lowercaseChar;
  var password = "";

  if (upperCaseConfirm && numberConfirm && specialCharConfirm){
    characters += uppercaseChar + numberChar + specialChar;
  }else if (upperCaseConfirm && numberConfirm){
    characters += uppercaseChar + numberChar;
  }else if (numberConfirm && specialCharConfirm){
    characters += numberChar + specialChar;
  }else if (upperCaseConfirm && specialCharConfirm){
    characters += uppercaseChar + specialChar;
  }else if (upperCaseConfirm){
    characters += uppercaseChar;
  }else if (numberConfirm){
    characters += numberChar;
  }else if (specialCharConfirm){
    characters += specialChar;
  }else{
    characters === lowercaseChar;
  }
  for (var i = 0; i < passLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = "";
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
