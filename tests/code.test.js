const code = require("../models/code.js");

test("Sum 40 + 2 should be 42", () => {
  const result = code.sumCode(40, 2);
  expect(result).toBe(42);
});
