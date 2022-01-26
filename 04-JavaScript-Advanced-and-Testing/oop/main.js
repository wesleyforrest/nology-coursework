//
class Employee {
  constructor(name, rating, grade, nextGrade) {
    this.name = name;
    this.rating = rating;
    this.grade = grade;
    this.nextGrade = nextGrade;
  }

  EmployeeAssesmemnt() {
    if (this.rating > 7) {
      return `${this.name} will likely be promoted from ${this.grade} to ${this.nextGrade}`;
    } else {
      return `${this.name} needs to work harder, no promotion`;
    }
  }
}

const edward = new Employee("Edward", 1, "Head of stuff", "Director of stuff");
const rupert = new Employee("Rupert", 10, "Manager", "CEO");

console.log(edward);
console.log(edward.EmployeeAssesmemnt());

console.log(rupert);
console.log(rupert.EmployeeAssesmemnt());
