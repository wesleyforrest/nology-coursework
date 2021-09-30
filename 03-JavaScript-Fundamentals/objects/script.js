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

//for (let i = 0; i < 10; i++) {
//  studentContainer.innerHTML += person.getPersonHTML();
//}

// person.age = 30;

// console.log(person.firstName + " " + person.lastName);

// console.log(person.getFullName());

//CLASS SYNTAX

//PascalClass - Naming convention for classes
class ExampleClass {
  constructor(firstName, lastName, age) {
    (this.firstName = firstName), (this.lastName = lastName), (this.age = age);
  }

  greet() {
    return `Hi my name is ${this.firstName} ${this.lastName}`;
  }
}

//CLASS INHERITANCE SYNTAX
class ExtendedClass extends ExampleClass {
  constructor(firstName, lastName, age, subject) {
    super(firstName, lastName, age), (this.subject = subject);
  }
  greet() {
    return `Hi I am Mr ${this.lastName} I will be teachong you ${this.subject}`;
  }
}

console.log(
  new ExtendedClass("Charlie", "Richardson", 30, "JavaScript").greet()
);

const exampleOne = new ExampleClass("Charlie", "Richardson", 30);
const exampleTwo = new ExampleClass("John", "Smith", 27);

console.log(exampleOne.greet());
console.log(exampleTwo.greet());

class Profile {
  constructor(firstName, lastName, quote, skills, imgURL) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.quote = quote),
      (this.skills = skills),
      (this.imgURL = imgURL);
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  skillsList() {
    const skillsList = this.skills.map((skill) => `<li>${skill}</li>`);
    return skillsList.join("\n");
  }
  getprofileHTML() {
    const profileHTML = `<article class="student-card">
  <img src=${this.imgURL} />
  <h2>${this.getFullName()}</h2>
  <blockquote>${this.quote}</blockquote>
  <h3>Skills</h3>
  <ul>${this.skillsList()}</ul>
</article>
`;
    return profileHTML;
  }
}

class PremiumProfile extends Profile {
  constructor(firstName, lastName, quote, skills, imgURL, contactLink) {
    super(firstName, lastName, quote, skills, imgURL);
    this.contactLink = contactLink;
  }

  getprofileHTML() {
    const profileHTML = `<article class="student-card">
  <img src=${this.imgURL} />
  <h2>${this.getFullName()}</h2>
  <blockquote>${this.quote}</blockquote>
  <h3>Skills</h3>
  <ul>${this.skillsList()}</ul>
  <a href=${this.contactLink}>Lets get in touch!</a>
</article>
`;
    return profileHTML;
  }
}

//const studentContainer = document.querySelector(".students-container");

const charlie = new PremiumProfile(
  "Charlie",
  "Richardson",
  "It doesn't get easier, you just go faster",
  ["html", "css", "JavaScript"],
  "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png",
  "https://developer.mozilla.org/en-US/"
);

const john = new Profile(
  "John",
  "Smith",
  "I like teapots",
  ["hedgehogs", "mongeese", "Turnips"],
  "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png"
);

const marjory = new Profile(
  "Marjory",
  "Jumpsuit",
  "I like Gingham egg cups",
  ["Jam", "Chutney", "Cake"],
  "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png"
);
studentContainer.innerHTML += charlie.getprofileHTML();
studentContainer.innerHTML += john.getprofileHTML();
studentContainer.innerHTML += marjory.getprofileHTML();
