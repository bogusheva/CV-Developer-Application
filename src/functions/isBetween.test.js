import isBetween from "./isBetween";

describe("return correct boolean value", () => {
  test("value is between boundaries", () => {
    expect(isBetween(50, 0, 100)).toBe(true);
  });
  test("value is equal to max boundary", () => {
    expect(isBetween(100, 0, 100)).toBe(true);
  });
  test("value is equal to min boundary", () => {
    expect(isBetween(0, 0, 100)).toBe(true);
  });
  test("value is under the min boundary", () => {
    expect(isBetween(-10, 0, 100)).toBe(false);
  });
  test("value is over the min boundary", () => {
    expect(isBetween(120, 0, 100)).toBe(false);
  });
});
