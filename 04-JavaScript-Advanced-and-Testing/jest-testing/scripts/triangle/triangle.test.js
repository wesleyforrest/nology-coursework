import { Triangle } from "./triangle.js";

describe(`Tests to determine whether or not a shape entered is a triangle`, () => {
  describe(`equelateral triangle`, () => {
    test("all sides are equal", () => {
      const triangle = new Triangle(2, 2, 2);
      expect(triangle.isEquelateral).toBe(true);
    });
  });
  describe(`triange with unequal sides`, () => {
    test("sides not equal", () => {
      const triange = new Triangle(7, 2, 6);
      expect(triange.isIsosceles).toBe(false);
    });
  });
  describe("two sides equal", () => {
    test("two sides equal", () => {
      const triange = new Triangle(3, 4, 4);
      expect(triange.isIsosceles).toBe(true);
    });
  });
  describe("shape is a scalene triange", () => {
    test("no sides are equal", () => {
      const triange = new Triangle(5, 4, 6);
      expect(triange.isScalene).toBe(true);
    });
    test("no sides are equal", () => {
      const triange = new Triangle(0.5, 0.4, 0.6);
      expect(triange.isScalene).toBe(true);
    });
  });
});
