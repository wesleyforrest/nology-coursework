function handleCalculateGrade(event) {

    let grade = event.target.value;
    grade = grade.toUpperCase(); 

    if(!grade) {
        return;
    }
    let percentage;
    switch (grade) {
        case "A":
            percentage = "90-100%";
            break;
        case "B":
            percentage = "75-89%";
            break;
        case "C":
            percentage = "50-74%";
            break;
        case "D":
            percentage = "25-49%";
            break;
        case "E":
            percentage = "0-24%";
            break;
        case "":
            percentage = "not be calculated, you failed you Kiwi Retard"
    }
    alert("The percentage was " + percentage);
}

let random = -4

if (random => 0); {
    console.log("Number is greater than 0");
} if (random <= 0) {
    console.log("Number is less than 0")
}

function handledaysToWeekend(event) {

    let day = event.target.value;
let daysToWeekend;
switch (day) {
    case "Monday":
        daysToWeekend = 5
        break;
    case "Tuesday":
        daysToWeekend = 4;
        break;
    case "Wednesday":
        daysToWeekend = 3;
        break;
    case "Thursday":
        daysToWeekend = 2;
        break;
    case "Friday":
        daysToWeekend = 1;
        break;
    case "Saturday":
        daysToWeekend = 0
        break;
    case "Sunday":
        daysToWeekend = 0
        break;
}
alert("There are " + daysToWeekend + " days until the weekend");
}

function handlevegetablePrice(event) {
    let vegetable = event.target.value;
    let vegetablePrice;

switch(vegetable) {
    case "Potato":
    case "Carrot":
        vegetablePrice = "£31,79 per KG"
        break;
    case "Brocolli":
        vegetablePrice = "£9.47 per KG"
        break;
    case "Cabbage":
        vegetablePrice = "£2.97 per KG"
        break;
    case "Asparagus":
        vegetablePrice = "£47,14 per KG"
        break;
    }
    alert("The price is " + vegetablePrice);
}