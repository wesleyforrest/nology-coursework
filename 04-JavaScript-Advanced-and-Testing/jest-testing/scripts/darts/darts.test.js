import { findScore } from "./darts";

describe("Darts", () => {
  test("missed target", () => {
    expect(findScore(-9, 9)).toEqual(0);
  });

  test("outer circle", () => {
    expect(findScore(0, 10)).toEqual(1);
  });

  test("middle circle", () => {
    expect(findScore(-5, 0)).toEqual(5);
  });

  test("inner circle", () => {
    expect(findScore(0, -1)).toEqual(10);
  });

  test("centre", () => {
    expect(findScore(0, 0)).toEqual(10);
  });

  test("invalid input", () => {
    expect(findScore("a", 0)).toEqual(null);
  });
});
