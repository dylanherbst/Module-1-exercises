// + mathmatical operator function
function add (sum1, sum2){
    console.log(sum1 + sum2);
};
console.log(add(2, 3));


// - mathmatical operator function
function subtract (sum1, sum2){
    console.log(sum1 - sum2);
};
console.log(subtract(3, 2));


// / mathmatical operator function
function divide (sum1, sum2){
    console.log(sum1 / sum2);
};
console.log(divide (4, 8));


//* mathmatical operator function
function multiply (sum1, sum2){
    console.log(sum1 * sum2);
};
console.log(multiply (4, 8));

//Create a function that takes the name of a person as an argument, and prints out “Hello <name>” to the console. 
function getName (name) {
    console.log(`Hello! ${name} its nice to meet you!`)
};
getName("dylan")


//Write a JavaScript program to calculate the days left before Christmas.


// Get the current date
today = new Date();
console.log(today);

// Create a Date object for Christmas of the current year
var christmasData = new Date(today.getFullYear(), 11, 25);
console.log(christmasData);

// Calculate the difference in days between today and Christmas
var timeDifference = (christmasData.getTime() - today.getTime())

// Log the number of days left until Christmas to the console
var one_day = 1000 * 60 * 60 * 24;
console.log(Math.ceil( timeDifference/ (one_day)) +
    " days left until Christmas!");

    
   // Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.

function isFifty (num1, num2) {
   if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
 return true;
} else {
    return false;
}
}
console.log(isFifty(20, 30));