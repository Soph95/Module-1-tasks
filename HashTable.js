const crypto = require("crypto");

class HashTable {
  constructor(arrayLength = 1000) {
    this.backingArray = new Array(arrayLength);
  }
  set(key, value) {
    const hex = crypto.createHash("md5").update(value).digest("hex");
    const decimal = parseInt(hex, 16);
    const index = decimal % this.backingArray.length;
    console.log(index);
    this.backingArray[index] = value;
    return this.backingArray[index];
  }

  get(key) {}
}

const example = new HashTable();
//console.log(example.set("Sophia", "12345678465"));

