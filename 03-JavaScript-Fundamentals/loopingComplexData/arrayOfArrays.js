//Matrix or multi dimensional array

//Table - Grid - Co-ordinates -Graph

//rows - X
//columns - Y

// const table = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let row = 0; row < table.length; row++) {
//   //console.log(table[row]);

//   for (let column = 0; column < table.length; column++)
//     console.log(table[column][row]);
// }

const grid = [
  ["X", "0", "X"],
  ["X", "0", "0"],
  ["0", "X", "X"],
];

for (let row = 0; row < grid.length; row++) {
  const rowString = grid[row].join("");
  let columnString = "";

  for (let column = 0; column < grid.length; column++) {
    columnString += grid[column][row];
  }
  console.log(row, rowString, columnString);

  if (rowString === "XXX" || columnString === "XXX") {
    console.log("X Wins");
    break;
  }
}
