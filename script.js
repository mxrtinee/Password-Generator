// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate a random password
function generatePassword() {
  // Prompt for password length
  var length = parseInt(prompt("Enter password length (8 to 128 characters):"));

  // Validate the input for password length
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length (8 to 128 characters).");
    return '';
  }

  // Prompt for character types to include
  var includeLowercase = confirm("Would you like to include lowercase letters? Okay for True & Cancel for False");
  var includeUppercase = confirm("Would you like to include uppercase letters? Okay for True & Cancel for False");
  var includeNumbers = confirm("Would you like to include numbers? Okay for True & Cancel for False");
  var includeSpecial = confirm("Would you like to include special characters? Okay for True & Cancel for False");

  // Validate that at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
    alert("You must include at least one character type in the password.");
    return '';
  }

  // Define character sets based on selected criteria
  var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numberChars = '0123456789';
  var specialChars = '!@#$%^&*()-_=+"';

  var chars = '';
  if (includeLowercase) chars += lowercaseChars;
  if (includeUppercase) chars += uppercaseChars;
  if (includeNumbers) chars += numberChars;
  if (includeSpecial) chars += specialChars;

  // Generate the password
  var password = '';
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
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
generateBtn.addEventListener("click", writePassword);
