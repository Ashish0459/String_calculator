const StringCalculator = require("./stringCalculator");

test("should return 0 for an empty string", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("")).toBe(0);
});

test("should return the number itself when one number is provided", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1")).toBe(1);
  expect(calculator.add("5")).toBe(5);
});

test("should return the sum of two numbers", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1,2")).toBe(3);
});

test("should handle an unknown amount of numbers", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1,2,3")).toBe(6);
  expect(calculator.add("1,2,3,4,5")).toBe(15);
});

test("should handle new lines between numbers", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1\n2,3")).toBe(6);
});

test("should support different delimiters", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("//;\n1;2")).toBe(3);
});

test("should throw an exception when a negative number is passed", () => {
  const calculator = new StringCalculator();
  expect(() => calculator.add("1,-2,3")).toThrow("Negatives not allowed: -2");
});

test("should throw an exception with all negative numbers listed", () => {
  const calculator = new StringCalculator();
  expect(() => calculator.add("1,-2,-3")).toThrow(
    "Negatives not allowed: -2, -3"
  );
});

test("should ignore numbers bigger than 1000", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("2,1001")).toBe(2);
  expect(calculator.add("1000,1001,2000,5")).toBe(1005); // 1000 and 5 included, 1001 and 2000 ignored
});
