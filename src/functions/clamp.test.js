import clamp from "./clamp";

describe("return correct max value from two", () => {
  test("second value is equal to first value", () => {
    expect(clamp(0)).toBe(0);
  });
  test("second value is less than first value", () => {
    expect(clamp(-1)).toBe(0);
  });
  test("value is more than first value", () => {
    expect(clamp(50)).toBe(50);
  });
});
