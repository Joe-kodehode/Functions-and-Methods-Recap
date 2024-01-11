// Functions - reusable code - only used when called (event)

// regular functions

// let userIsAdmin = false;

// function adminChecker() {
//   if (userIsAdmin) {
//     console.log("user is admin");
//   } else {
//     console.log("user is not admin");
//   }
// }
// adminChecker();

// arrow functions

// const namesArray = ["Samuel", "Christian", "Sarah"];

// const arrowFunction = (user, location, arrayOfNames) => {
//   return arrayOfNames[2];

//   `Welcome ${user}, I see you're located in ${location}`;
//   console.log(user)
// };

// console.log(arrowFunction("joe", "Stavanger"));
// console.log(arrowFunction("Rama", "Bergen"));
// console.log(arrowFunction("Afaf", "Oslo"));
// console.log(arrowFunction("Tone", "Tromsø"));

// parameters // arguments

// function rockPaperScissors(userInput, aiInput) {
//   switch (userInput + aiInput) {
//     case "rock" + "rock":
//     case "paper" + "paper":
//     case "scissors" + "scissors":
//       return "it's a draw";
//     case "rock" + "scissors":
//     case "paper" + "rock":
//     case "scissors" + "paper":
//       return "user wins";
//     default:
//       return "AI wins";
//   }
// }
// console.log(rockPaperScissors("paper", "rock"));

// Making things random with Math.random

// const possibleAnswers = ["rock", "paper", "scissors"];

// let aiAnswer =
//   possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];

// console.log(aiAnswer);

// Methods
// built in functions - manipulating data

// String methods
// let myString = "This is my example string!";
// let myNewString;

// myNewString = myString.toUpperCase();
// myNewString = myString.charAt(5);
// myNewString = myString.slice(5, 7);
// myNewString = myString.trim();
// myNewString = myString.replace("example", "cool");
// myNewString = myString.replaceAll("example", "cool");
// myNewString = myString.split(" ");
// myNewString = parseInt(myString);
// console.log(myString);

// console.log(myNewString);

// Number methods
// let myNumber = 5.4575;
// let myNewNumber;
// myNewNumber = myNumber.toString();
// myNewNumber = myNumber.toExponential();
// myNewNumber = myNumber.toPrecision(3);
// myNewNumber = myNumber.toFixed(3);

// console.log(myNumber);
// console.log(myNewNumber);

// Array methods
// let myArray = ["apple", "pear", "banana", "peach"];
// let myNewArray = ["cherry", "grape"];

// myArray.push("cherry");
// myArray.pop();
// myArray.shift();
// myArray.unshift("grape");
// console.log(myArray.join(" "));
// myNewArray = myArray.toString();
// console.log(myArray.concat(myNewArray, ["kiwi"]));
// console.log(myArray.splice(2, 2, "kiwi"));
// console.log(myArray);

// console.log(myArray);
// console.log(myNewArray);
