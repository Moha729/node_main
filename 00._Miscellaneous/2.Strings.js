// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

let addNumbers = Number(numberOne) + Number(numberTwo)

console.log(addNumbers);


// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

let anotherAddedNumbers = Number(anotherNumberOne) + Number(anotherNumberTwo)

anotherAddedNumbers = anotherAddedNumbers.toFixed(2)

console.log(anotherAddedNumbers);
// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10.2;
const two = 45.5;
const three = 98;

// Show in the console the avg. with 5 decimals

const arrayNumbers = [one, two, three]

let average = (one + two + three) / 3
average = average.toFixed(5)

console.log(average);



// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log(letters.charAt(2));




// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript! jaa";

// capitalize the J in Javascript

console.log(fact.indexOf('j'));

let newLetter = fact.charAt(17).toUpperCase()

let test = fact.replace('j', 'J')

//console.log(fact.charAt(17).toUpperCase);

console.log(test);

// --------------------------------------


