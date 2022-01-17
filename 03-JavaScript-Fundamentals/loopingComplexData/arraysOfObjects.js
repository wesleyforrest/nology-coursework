// const fruitObjectArray = [
//   { fruit: "apple" },
//   { fruit: "banana" },
//   { fruit: "orange" },
// ];

// // console.log(fruitObjectArray[0].fruit);
// // console.log(fruitObjectArray[1].fruit);
// // console.log(fruitObjectArray[2].fruit);

// const fruitValueArray = fruitObjectArray.map((fruitobject) => {
//   const fruitValue = fruitobject.fruit;
//   return fruitValue;
// });

// //console.log(fruitValueArray);

// const searchTerm = "g";

// const matchingFruitArray = fruitObjectArray.filter((fruitobject) => {
//   const fruitMatch = fruitobject.fruit.includes(searchTerm);
//   return fruitMatch;
// });

// //console.log(matchingFruitArray);

// const generateFruitHTML = (fruitArray) => {
//   const html = fruitArray.map((fruitObject) => {
//     return `<li>${fruitObject.fruit}</li>`;
//   });
//   return html.join("");
// };

// console.log(generateFruitHTML(fruitObjectArray));

const fruitObjectArray = [
  { fruit: "apple", rating: 8, price: 150 },
  { fruit: "banana", rating: 5, price: 180 },
  { fruit: "orange", rating: 6, price: 120 },
];

//console.log(fruitObjectArray[2].price);

const generateFruitHTML = (fruitArray) => {
  const html = fruitArray.map((fruitObject) => {
    const price = (fruitObject.price / 100).toFixed(2);
    const capitalised =
      fruitObject.fruit[0].toUpperCase() + fruitObject.fruit.slice(1);
    const cardHtml = `
        <div>
        <h3>${capitalised}</h3>
        <p>This fruit is ${fruitObject.rating} / 10 </p>
        <p>Buy now for £${price}</p>
        </div>
        `;
    return cardHtml;
  });
  return html.join("");
};

const sortedByHighestRating = fruitObjectArray.sort((a, b) => {
  return b.price - a.price;
});

console.log(sortedByHighestRating);
console.log(generateFruitHTML(sortedByHighestRating));
