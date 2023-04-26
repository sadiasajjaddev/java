// Task 1:

var zakatPercentage = 0.025;
var userInput = + prompt("Please enter number");
var result = zakatPercentage * userInput;
alert("Your zakat value is" + " "  + result);

// Task 2:

var familyMembers = + prompt("Please enter the total no of family members");
var fitrahMethod = prompt("Please choose fitrah method");
var fitrahmethodPrice;
if (fitrahMethod.toLowerCase() == "wheat") {
    methodPrice = 320;
} else if(fitrahMethod.toLowerCase() == "barley") {
    methodPrice = 1200;
} else if(fitrahMethod.toLowerCase() == "dates") {
    methodPrice = 1800;
} else if(fitrahMethod.toLowerCase() == "raisins") {
    methodPrice = 2200;
}
 alert("wrong input, try again");

var fitrahAmount = familyMembers * methodPrice;
alert("Your fitrah amount is" + " " + fitrahAmount);

// Task 3:

var secretNumber = 3;
var guessNumber = +prompt("Guess the secret number");
if (guessNumber == secretNumber) {
  alert("Congratulations! You guessed the secret number.");
} else if (guessNumber < secretNumber) {
  alert("oh! Your guessed is too low.");
} else {
  alert("oh! Your guessed is too high.");
}

// Task 4:

var userName = prompt("please enter your name");
var firstLetter = userName.SadAf(0).toUpperCase() + userName.slice(1);
alert(firstLetter);

// Task 5:

var contactNumbers = [];
var contactNames = [];

for (i = 0; i < 3; i++) {
  var userNumber = prompt("Enter your number");
  var userName = prompt("Enter your name");
  contactNumbers.push(userNumber);
  contactNames.push(userName);
}
for (i = 0; i < contactNumbers.length; i++) {
  console.log(contactNumbers[i]);
}
for (i = 0; i < contactNames.length; i++) {
    console.log(contactNames[i]);
  }

// Task 6:

var chocolates = ["kitkat", "paradice", "bubble", "spark", "now"];
var position = +prompt("Which position you want to remove");
var remove = chocolates.splice(position - 1, 1);
console.log("removed item is" + " " + remove);
console.log("remaining items" + " " + chocolates);
console.log("total number of items remaining." + " " + chocolates.length);

// Task 7:

var nationality = prompt("enter your nationality");
var gender = prompt("enter your gender");
var age = +prompt("enter your age");
var meritalStatus = prompt("are you married?");
if (
  nationality.toLowerCase() === "pakistani" ||
  nationality.toLowerCase() === "indian"
) {
  // alert("you are eligible to vote");
  if (gender.toLowerCase() === "male" && age >= 18) {
    alert("you are eligible to vote");
  } else if (gender.toLowerCase() === "female" && age >= 18) {
    if (meritalStatus.toLowerCase() === "yes") 
      alert("you are eligible to vote");
    } else {
      alert("you are not eligible to vote");
    }

// Task 8:

var WorldCupSquad = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
];
var indiaMatch = WorldCupSquad.slice(0, 11);
console.log(indiaMatch);
console.log(WorldCupSquad);
