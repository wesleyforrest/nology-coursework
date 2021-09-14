// Create variables for 2 team scores
let teamOneScore = 0;
let teamTwoScore = 0;
isGameStopped = false;

// Increase score by 1 each time a team scores
function handleTeamOneClick() {
    teamOneScore = teamOneScore + 1;
}
button.onclick = function handleTeamTwoClick() {
    teamTwoScore = teamTwoScore + 1;
}

function handlestopGame() {
    isGameStopped = true;
}