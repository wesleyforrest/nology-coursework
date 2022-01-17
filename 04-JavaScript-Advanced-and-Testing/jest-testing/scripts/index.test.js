import { getName, getNewName } from "./index.js";

it("Should return the string 'Wes, 39 years old'", () => {
  const output = getName("Wes", 39);
  expect(output).toBe("Wes, 39 years old");
});

it("Should return the name, followed by the age", () => {
  const output = getNewName("Jeff Bezos", 74);
  expect(output).toBe("Jeff Bezos, 74 years old");
});
