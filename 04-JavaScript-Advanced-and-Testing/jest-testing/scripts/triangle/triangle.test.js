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
      const triangle = new Triangle(7, 2, 6);
      expect(triangle.isIsosceles).toBe(false);
    });
  });
  describe("two sides equal", () => {
    test("two sides equal", () => {
      const triangle = new Triangle(3, 4, 4);
      expect(triangle.isIsosceles).toBe(true);
    });
  });
  describe("shape is a scalene triangle", () => {
    test("no sides are equal", () => {
      const triangle = new Triangle(5, 4, 6);
      expect(triangle.isScalene).toBe(true);
    });
    test("no sides are equal", () => {
      const triangle = new Triangle(0.5, 0.4, 0.6);
      expect(triangle.isScalene).toBe(true);
    });
  });
});
