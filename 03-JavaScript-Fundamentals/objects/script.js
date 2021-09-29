//

const person = {
  firstName: "Charlie",
  lastName: "Richardson",
  quote: "It doesn't get easier, you just go faster",
  skills: ["html", "css", "JavaScript"],
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  skillsList() {
    const skillsList = this.skills.map((skill) => `<li>${skill}</li>`);
    console.log(skillsList);
    return skillsList.join("\n");
  },
};

console.log(person.skillsList());
// person.age = 30;

// console.log(person.firstName + " " + person.lastName);

// console.log(person.getFullName());
