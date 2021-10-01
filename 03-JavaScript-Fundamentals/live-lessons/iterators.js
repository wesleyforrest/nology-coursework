/*
const namesArr = ["Ash", "Helen", "Imran", "Wes", "Mel"];

//forEach iterates over an array and returns values (will run for the whole duration of the array)

namesArr.forEach((name) => {
  console.log(name);
});

const numbers = [20, 544, 565, 774, 33766, 5677];

numbers.forEach((number) => {
  console.log(number);
});

//map returns a new array, you must use return keyword

const newNumbers = numbers.map((number) => {
  return number + 100;
});

console.log(newNumbers);
*/

//Filter
/*
const numbers = [4, 25, 19, 55, 100, 157];

const newNumbers = numbers.filter((number) => {
  return number === 25;
});

console.log(newNumbers);

names = ["Ash", "Helen", "Imran", "Wes", "Mel"];

const newNames = names.filter((name) => {
  return name.includes("a");
});
console.log(newNames);
*/

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61];
const colours = ["red", "yellow", "pink", "green", "orange", "purple", "blue"];
// forEach
// 1) log each AGE to the console
// 2) log "I am (age) years old" for each index
// 3) CHALLENGE - For each age in ages array, double the age and log a string using that doubled value
//map
// 1) Double each age in the array and log it to the console.

//3) CHALLENGE -  put the square root of each age in the ages array into a new array
//filter
//1) Create a new array with all the ages that are over eighteen
//2) Filter out all the words that have less than 5 letters
//3) CHALLENGE - Create a new array containing all the even numbers in the ages array

const doubleAge = ages.map((age) => {
  return age * 2;
});
console.log(doubleAge);

const sqrt = ages.map((square) => {
  return Math.sqrt(square);
});

console.log(sqrt);

const over16Arr = ages.filter((age) => {
  return age > 18;
});

console.log(over16Arr);

const letters5 = colours.filter((colour) => {
  return colour.length < 5;
});

console.log(letters5);

const evenNumbers = ages.filter((age) => {
  return age % 2 === 0;
});

console.log(evenNumbers);
