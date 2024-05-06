const sum = require("../sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

import sumEs6 from "../sumEs6";

test("adds 1 + 2 to equal 3", () => {
  expect(sumEs6(1, 2)).toBe(3);
});
