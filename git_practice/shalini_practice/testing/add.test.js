const add = require("./add");
test("adding 2 and 3", () => {
  expect(add(2, 3).toBe(5));
});
