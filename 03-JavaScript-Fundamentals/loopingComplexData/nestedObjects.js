const user = {
  id: "dhdiwe3ierdiei",
  loggenIn: true,
  information: {
    firstName: "Charlie",
    lastName: " Richardson",
    age: 30,
    likes: ["cycling", "disco", "coding"],
  },
  contact: {
    email: "charlie@charlie.co.uk",
    contactNumber: "079484733883",
    address: {
      houseNumber: 12,
      nameOfRoad: "electric avenue",
      postcode: "pl179ns",
      country: "uk",
    },
  },
};

const userTwo = {
  id: "dhdiwe3ierdiei",
  loggenIn: true,
  information: {
    firstName: "Charlie",
    lastName: " Richardson",
    age: 30,
    likes: ["cycling", "disco", "coding"],
  },
  contact: {
    email: "charlie@charlie.co.uk",
    contactNumber: "079484733883",
    address: {
      houseNumber: 12,
      nameOfRoad: "electric avenue",
      postcode: "pl179ns",
      country: "uk",
    },
  },
};

// console.log(user.contact.contactNumber);
// console.log(user.information.age);
// console.log(user.contact.address.country);
// console.log(user.contact);
// console.log(user.information.likes);

const userArray = [user, userTwo];

userArray.forEach((user) => {
  console.log(user.information.likes);
});
