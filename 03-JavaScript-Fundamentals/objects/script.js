//

const studentContainer = document.querySelector(".students-container");

//studentContainer.style.border = "50px solid red";

const person = {
  firstName: "Charlie",
  lastName: "Richardson",
  quote: "It doesn't get easier, you just go faster",
  skills: ["html", "css", "JavaScript"],
  imgURL:
    "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  skillsList() {
    const skillsList = this.skills.map((skill) => `<li>${skill}</li>`);
    return skillsList.join("\n");
  },
  getPersonHTML() {
    const personHTML = `<article class="student-card">
  <img src=${this.imgURL} />
  <h2>${this.getFullName()}</h2>
  <blockquote>${this.quote}</blockquote>
  <h3>Skills</h3>
  <ul>${this.skillsList()}</ul>
</article>
`;
    return personHTML;
  },
};

for (let i = 0; i < 10; i++) {
  studentContainer.innerHTML += person.getPersonHTML();
}

// person.age = 30;

// console.log(person.firstName + " " + person.lastName);

// console.log(person.getFullName());
