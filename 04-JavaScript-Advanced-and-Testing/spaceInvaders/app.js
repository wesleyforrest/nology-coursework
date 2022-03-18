// const motherShip = 100;
// const defenceShip = document.querySelectorAll(".defence");
// const individualDefenceShips = ["d1", "d2", "d3", "d4", "d5"];
// const individualFighterShip = [];
// const fighter = 45;

// const fire = onclick();

// 1. Create class for ship, initial value, points deducted on being hit

class ship {
  constructor(shipType, initialValue, pointsPerHit) {
    this.shipType = shipType;
    this.initialValue = initialValue;
    this.pointsPerHit = pointsPerHit;
  }
}

const motherShip = new ship("mothership", 100, 9);

const defenceShip = new ship("defence", 80, 10);

const fighter = new ship("fighter", 45, 12);

// 2. Select ship at random and identify its class.

//3. Create if statememnt that identifies the ship and if appropriate, deducts the correct number of hitpoints

// if(ship has points > 0 && is mothership) {shipValue - 10} else if ()
