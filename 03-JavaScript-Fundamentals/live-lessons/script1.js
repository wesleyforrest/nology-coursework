/*
dogs = ["Dave", "Bernard", "Eric", "Rupert"];
console.log(dogs);
dogs.push("Geoff");
console.log(dogs);

dogs.pop();

console.log(dogs);

console.log(dogs[1]);

firstNum = 4;

secNum.push(firstNum);

console.log(secNum);
*/

//declare an array of strings

const dogs = ["Rusty", "Bernard", "Eric", "Montague"];

//declare an array of numbers

const years = [1990, 1992, 2000, 1965, 2007];

//Access values

console.log(dogs[2]);
console.log(years[4]);
console.log(dogs[dogs.length - 1]);
let lastIndex = dogs.length - 1;
console.log(dogs[lastIndex]);

//Change values

dogs[1] = "Bert";
dogs.push("Poppy");
console.log(dogs);

//Find index of values
console.log("Eric is at " + dogs.indexOf("Eric"));
console.log(
  "Does the years array have the value 1995 in? " + years.includes(1995)
);

//Objects
const students = [
  {
    name: "James",
    age: 22,
  },
  {
    name: "John",
    age: 32,
  },
  {
    name: "Sasha",
    age: 38,
  },
];

console.log(students[1].age);
console.log(students[2].name);

//Create a for loop
//1. Create a counter
//2. When should it stop?
//3. What should it do between loops?

for (i = 0; i < students.length; i++) {
  console.log(students[i].age);
}

for (i = 0; i < years.length; i++) {
  console.log("The year is " + years[i]);
}

for (i = 0; i < years.length; i++) {
  if (years[i] <= 2000) console.log("The year is " + years[i]);
}

const currentYear = 2021;
for (i = 0; i < years.length; i++) {
  console.log(years[i] + " was " + (currentYear - years[i]) + " years ago");
}
