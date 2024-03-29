// Defining my age
let myAge = 20;

// Defining early years. The first two human years of a dog's life count as 10.5 dog years each
let earlyYears = 2;
earlyYears *= 10.5;

// Defining later years. Each human year following counts as 4 dog years
let laterYears = myAge - 2;
laterYears *= 4;

// Calculating my age in dog years
let myAgeInDogYears = earlyYears + laterYears;

// Defining my name and converting to lowercase
const myName = "Brett";
myName.toLowerCase();

// Displaying my name and age in dog years
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);