function calculateYearsUntilRetirement(event) {
    const currentAge = event.target.value;
    const yearsLeft = 65 - currentAge;

    alert(yearsLeft)
}

function GetGreetingInFrench(event) {
    const greeting = event.target.value;
if (greeting == "Hello") {
    alert("Bonjour")
} else if (greeting == "Goodbye") {
    alert("Au Revoir")
} else {
    alert("Not Recognised")
}
}

function complainAboutCourse(event) {
    const moan = event.target.value;
    if (moan == "yes") {
        alert("Make a complaint")
    } else if (moan == "no") {
        alert("Don't complain and crack on")
    } else {
        alert("Take up Knitting")
    }
}

function scoreCalc(event) {
    const score = event.target.value;
    if (score <= "9") {
        alert("Try Harder")
    } else if (score === "10") {
        alert("Perfect Score!")
    } else {
        alert("You went over, try again")
    }
}