const getDescription = (noChildren, partnerName, location, job) => {
    return `I am currently a ${job} living in ${location} and married to ${partnerName} and have ${noChildren} children`
}
const job = "farmer"
const noChildren = 4
const partnerName = "Margory"
const location = "sometown"


console.log(getDescription(noChildren, partnerName, location, job));

const calculateSupply = (currentAge, qtyDay) => {
    const age = 100;
const numberBars = (age - currentAge) * qtyDay * 365;
    return `You will need ${numberBars} to last until 100`

}

console.log(calculateSupply(20,4))

//let currentAge = 20;
//let qtyDay = 4;
//const age = 100;
//const numberBars = (age - currentAge) + qtyDay * 365;
//console.log(calculateSupply(100,4,20))


const tempConverter = (celcius) => {
    const farenheight = celcius * 1.8 + 32;
    return `The temperature in farenheight will be ${farenheight} degrees`;
}

console.log(tempConverter(20))

const puppyAgeCalculator = (humanAge) => {
    const puppyAge = humanAge * 7;
    return `Your puppy is ${puppyAge} in dog years`
}

console.log(puppyAgeCalculator(4))