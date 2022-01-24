//What is a promise?
//A promise has 3 states....pending, resolved, rejected

//

//https://randomuser.me/api/
// const heading = document.querySelector("h1");

// const getRandomUser = () => {
//   fetch("https://randomuser.me/api/")
//     .then((res) => res.json())
//     .then((json) => (heading.innerHTML = json.results[0].name.first))
//     .catch((err) => console.log(err));
// };
// getRandomUser();

//
//  https://api.punkapi.com/v2/beers/random

// Make a request tot the above api and display the following in a card div

// name(h1
//   tagline(h2))
//   description (p)
//   abv (h2)
//   First food to pair with (p)

// const beer = document.querySelector(".name");
// const tag = document.querySelector("#tag");
// const description = document.querySelector("#description");
// const abv = document.querySelector("#abv");
// const pair = document.querySelector("#pair");

// const randomBeer = () => {
//   fetch("https://api.punkapi.com/v2/beers/random")
//     .then((res) => res.json())
//     .then((json) => console.log(json));
// };
// randomBeer();

const makeBeerCard = (beer) => {
  return `
  <div class="beer-container">
  <h1>${beer.name}</h1>
  <h4>${beer.tagline}</h4>
  <p>${beer.description}</p>
  <h3>${beer.abv}</h4>
  <p>Served best with: ${beer.food_pairing}</p>
  </div>
  `;
};

const randomBeer = () => {
  fetch("https://api.punkapi.com/v2/beers/random")
    .then((res) => res.json())
    .then((json) => (document.body.innerHTML += makeBeerCard(json[0])));
};
randomBeer();
