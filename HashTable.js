const crypto = require("crypto");

class HashTable {
  constructor(arrayLength = 1000) {
    this.backingArray = new Array(arrayLength);
  }
  set(key, value) {
    const index = this.getIndex(key);
    this.backingArray[index] = value;
  }

  get(key) {
    const index = getIndex(key);
    return this.backingArray[index];
  }

  getIndex(key) {
    const hex = crypto.createHash("md5").update(key).digest("hex");
    const decimal = parseInt(hex, 16);
    return decimal % this.backingArray.length;
  }
}

module.exports = HashTable;
