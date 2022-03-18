// const motherShip = 100;
// const defenceShip = document.querySelectorAll(".defence");
// const individualDefenceShips = ["d1", "d2", "d3", "d4", "d5"];
// const individualFighterShip = [];
// const fighter = 45;

// const fire = onclick();

class ship {
  constructor(shipType, value, damage) {
    this.shipType = shipType;
    this.value = value;
    this.damage = damage;
  }
}

const motherShip = new ship("mothership", 100, 9);

const defenceShip = new ship("defence", 80, 10);

const fighter = new ship("fighter", 45, 12);
