const HashTable = require("./HashTable");

describe("HashTable tests", () => {
  it("should be able to create new HashTable", () => {
    new HashTable();
  });
  it("should allow you to set a key and value", () => {
    const example = new HashTable();
    example.set("exampleTxt", "example");
  });
});
