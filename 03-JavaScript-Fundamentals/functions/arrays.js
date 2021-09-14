/*
let coaches = ["Andy", "Bex", "Sam", "Ollie", "Ashlee", "Charlie"]

//console.log(coaches)
//console.log(coaches[3])
//console.log(coaches[2])

let pets = ["Giraffe", "Baboon", "Chimp", "Walrus", "Penguin"]

//console.log(pets[2])


//for (let index = 0; index < 5; index++) {
//    console.log("The index on this loop was " + index);
//}


//for (let index = 0; index < pets.length; index++) {
//    console.log(pets[index])
//}

pets.forEach((pet) => {
    console.log(pet);
})

const newCoaches = coaches.map((coach) => {
    return "coach - " + coach;
})

console.log(newCoaches);

newPetArray = pets.map((pet) => {
    return "Hello " + pet;
})

console.log(newPetArray)
*/
/*
const names = ["Andy", "Sam", "Dave"];

const coaches = names.filter((names) => {
    if (names.includes ("S")) {
        return true;
    } else {
        return false
    }
})

console.log(coaches)
*/

const scores = [8, 9, 12]


// Three ways to write the same statement
const highScore = scores.filter((score) => {
    if (score > 10) {
        return true;
    }   else {
        return false;
    }
})

const highScore = scores.filter((score) => {
    return score > 10;
})

const highScore = scores.filter((score) => score > 10)

console.log(highScore)