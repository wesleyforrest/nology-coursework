//
// class Employee {
//   constructor(name, rating, grade, nextGrade) {
//     this.name = name;
//     this.rating = rating;
//     this.grade = grade;
//     this.nextGrade = nextGrade;
//   }

//   EmployeeAssesmemnt() {
//     if (this.rating > 7) {
//       return `${this.name} will likely be promoted from ${this.grade} to ${this.nextGrade}`;
//     } else {
//       return `${this.name} needs to work harder, no promotion`;
//     }
//   }
// }

// const edward = new Employee("Edward", 1, "Head of stuff", "Director of stuff");
// const rupert = new Employee("Rupert", 10, "Manager", "CEO");

// console.log(edward);
// console.log(edward.EmployeeAssesmemnt());

// console.log(rupert);
// console.log(rupert.EmployeeAssesmemnt());

class Vehicle {
  constructor(brand, size) {
    this.brand = brand;
    this.size = size;
    this.currentVelocity = 0;
    this.currentDirection = 0;
  }
  getCurrentDirection() {
    return this.currentDirection;
  }

  getCurrentVelocity() {
    return this.currentVelocity;
  }

  steer(direction) {
    this.currentDirection += direction;
    console.log(
      "vehicle.steer(): steering at " + this.currentDirection + "degrees."
    );
  }

  move(velocity, direction) {
    this.currentVelocity = velocity;
    this.currentDirection = direction;
    console.log(
      "vehicle.move(): Steering at " +
        this.currentVelocity +
        "mph in direction " +
        " degrees"
    );
  }

  stop() {
    this.currentVelocity = 0;
  }
}

const samsVehicle = new Vehicle("Tractor", "Large");

class Car extends Vehicle {
  constructor(name, size, wheels, doors, gears, isManual) {
    super(name, size);
    this.wheels = wheels;
    this.doors = doors;
    this.gears = gears;
    this.isManual = isManual;
    this.currentGear = 1;
  }

  changeGear(currentGear) {
    this.currentGear - currentGear;
    console.log("car.changeGear(): Changed to gear " + this.currentGear);
  }

  changeVelocity(speed, direction) {
    console.log(
      "car.changeVelocity(): velocity " + speed + " direction " + direction
    );
    super.move(speed, direction);
  }
}

const samsCar = new Car("SamCar", "Medium", 4, 5, 5, true, 0);

class Ferrari extends Car {
  constructor(roadServiceMonths) {
    super("Ferrari", "RWD", 4, 5, 6, false);
    this.roadServiceMonths = roadServiceMonths;
  }

  accelerate(rate) {
    let newVelocity = super.getCurrentVelocity() + rate;
    if (newVelocity == 0) {
      super.stop();
      super.changeGear(1);
    } else if (newVelocity > 0 && newVelocity <= 10) {
      super.changeGear(1);
    } else if (newVelocity > 10 && newVelocity <= 20) {
      super.changeGear(2);
    } else if (newVelocity > 20 && newVelocity <= 30) {
      super.changeGear(3);
    } else {
      super.changeGear(4);
    }

    if (newVelocity > 0) {
      super.changeVelocity(newVelocity, super.getCurrentDirection());
    }
  }
}

const ferrari = new Ferrari(7);

ferrari.steer(45);
ferrari.accelerate(30);
ferrari.accelerate(20);
