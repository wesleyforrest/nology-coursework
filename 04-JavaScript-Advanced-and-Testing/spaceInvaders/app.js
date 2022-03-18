const mShip = m1;
const allDefenceShips = document.querySelectorAll(".defence");
const allFighterShips = document.querySelectorAll(".fighter");
const individualDefenceShips = ["d1", "d2", "d3", "d4", "d5"];
const individualFighterShip = ["f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8"];
const fireBtn = document.querySelectorAll(".btn__fire");
const resetBtn = document.querySelectorAll(".btn__reset");

// 1. Create class for ship, initial value, points deducted on being hit

class ship {
  constructor(shipType, initialValue, pointsPerHit, currentValue) {
    this.shipType = shipType;
    this.initialValue = initialValue;
    this.pointsPerHit = pointsPerHit;
    this.currentValue = currentValue;
  }
}

const motherShip = new ship("mothership", 100, 9, 100);

const defenceShip = new ship("defence", 80, 10, 80);

const fighter = new ship("fighter", 45, 12, 45);

// 2. Select ship at random and identify its class.

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

switch (shipNumber().shipName()) {
  case 0:
    shipName = "mothership";
    break;
  case 1:
    shipName = "defence";
    break;
  case 2:
    shipName = "fighter";
}

console.log(shipNumber(getRandomInt(3)));

if (shipName == motherShip && currentValue > 0) {
  motherShip.currentValue - 9;
} else if (shipName == defenceShip && currentValue > 0) {
  defenceShip.currentValue - 10;
} else if (shipName == fighter && currentValue > 0) {
  fighter.currentValue - 12;
} else {
  motherShip == 0;
}

//3. Create if statememnt that identifies the ship and if appropriate, deducts the correct number of hitpoints

// if(ship has points > 0 && is mothership) {shipValue - 9} else if (ship has points > 0 && is defence) {shipValue - 10} else if (ship has points > 0 && is fighter) {shipValue - 12}
