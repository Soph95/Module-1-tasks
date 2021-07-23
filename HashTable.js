const crypto = require("crypto");

class HashTable {
  constructor() {
    this.backingArray = [];
  }
  set(key, value) {
    const hex = crypto.createHash("md5").update(value).digest("hex");
    const decimal = parseInt(hex, 16);
    const index = decimal % 1000;
    console.log(index);
    this.backingArray[index] = value;
    return this.backingArray[index];
  }

  get(key) {}
}

const example = new HashTable();
console.log(example.set("Sophia", "12345678465"));

// class PasswordVault {
//   constructor(path) {}
//   add(username, password) {}
//   check(username, password) {}
// }
