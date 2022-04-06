const fireBtn = document.querySelector(".btn__fire");
const resetBtn = document.querySelector(".btn__reset");
const shipArray = [];

const motherShipContainer = document.querySelector("#mship");
const defenceShipContainer = document.querySelector("#dship");
const fighterShipContainer = document.querySelector("#fship");

// 1. Create class for ship, initial value, points deducted on being hit

class Ship {
  constructor(shipType, initialValue, pointsPerHit, id) {
    this.shipType = shipType;
    this.initialValue = initialValue;
    this.pointsPerHit = pointsPerHit;
    this.id = id;
  }
  remainingLife() {
    return (this.initialValue = this.initialValue - this.pointsPerHit);
  }
  renderShip() {
    return `<p class=${this.shipType} id=${this.id}>${this.initialValue}</p>`;
  }
}

// 2. Create ships using JS

const motherShip = new Ship("mothership", 100, 9, `ship-${1}`);
shipArray.push(motherShip);
motherShipContainer.innerHTML = motherShip.renderShip();

for (let i = 0; i < 5; i++) {
  const defenceShip = new Ship("defence", 80, 10, `ship-${i + 2}`);
  shipArray.push(defenceShip);
  defenceShipContainer.innerHTML += defenceShip.renderShip();
}
for (let i = 0; i < 8; i++) {
  const fighter = new Ship("fighter", 45, 12, `ship-${i + 7}`);
  shipArray.push(fighter);
  fighterShipContainer.innerHTML += fighter.renderShip();
}

// 3. Select ship at random using id.

const getRandomIndex = (id) => {
  return Math.floor(Math.random() * shipArray.length);
};

const hitRandomShip = () => {
  let randomIndex = Math.floor(Math.random() * shipArray.length);
  let randomShipHit = shipArray[randomIndex].remainingLife();
  const hitShipHTML = document.querySelector(`#${shipArray[randomIndex].id}`);
  hitShipHTML.innerText = "";
  if (randomShipHit <= 0) {
    let shipIndex = shipArray.indexOf(shipArray[randomIndex]);
    console.log(shipIndex);
    shipArray.splice(shipIndex, 1);
    console.log(shipArray);
    hitShipHTML.parentNode.removeChild(hitShipHTML);
    // if ship's current points is less than or equal to zero, then remove the HTML but also this ship from the shipArray.
    /// hitShipHTML.style.display = "none";
  }

  if (shipArray.length === 0 || Ship.motherShip.initialValue <= 0) {
    gameOver();
  }

  return (hitShipHTML.innerText = randomShipHit);

  // Get random index based on the ShipArray length
  // get random ship from shipArray using the random Index
};

const gameOver = () => {
  alert("All ships destroyed, Game Over!");
};

console.log(hitRandomShip());
fireBtn.addEventListener("click", hitRandomShip);

//Redundant code

// const mothership = document.querySelectorAll(".mothership");
// const allDefenceShips = document.querySelectorAll(".defence");
// const allFighterShips = document.querySelectorAll(".fighter");
// const individualDefenceShips = ["d1", "d2", "d3", "d4", "d5"];
// const individualFighterShip = ["f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8"];

// switch (shipNumber().shipName()) {
//   case 0:
//     shipName = "mothership";
//     break;
//   case 1:
//     shipName = "defence";
//     break;
//   case 2:
//     shipName = "fighter";
// }

// console.log(shipNumber(getRandomInt(3)));

// if (shipType == motherShip && currentValue > 0) {
//   motherShip.currentValue - 9;
// } else if (shipType == defenceShip && currentValue > 0) {
//   defenceShip.currentValue - 10;
// } else if (shipType == fighter && currentValue > 0) {
//   fighter.currentValue - 12;
// } else {
//   motherShip == 0;
// }

//3. Create if statememnt that identifies the ship and if appropriate, deducts the correct number of hitpoints

// if(ship has points > 0 && is mothership) {shipValue - 9} else if (ship has points > 0 && is defence) {shipValue - 10} else if (ship has points > 0 && is fighter) {shipValue - 12}
