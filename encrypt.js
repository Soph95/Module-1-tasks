let letters = {};
function encrypt(message, key) {
  let counter = 1;
  for (let i = 65; i <= 90; i++) {
    letters[String.fromCharCode(i)] = counter;
    counter++;
  }

  const [messageValues, keyValues] = messageAndKeyValues(message, key);

  let encryptCode = [];
  for (let i = 0; i < messageValues.length; i++) {
    messageValues[i] + keyValues[i] > 26
      ? encryptCode.push((messageValues[i] + keyValues[i]) % 26)
      : encryptCode.push(messageValues[i] + keyValues[i]);
  }

  let encryptedKey = "";
  for (let i = 0; i < encryptCode.length; i++) {
    for (const [key, value] of Object.entries(letters))
      if (encryptCode[i] === value) encryptedKey += key;
  }

  return encryptedKey;
}
const result = encrypt("CAT", "AHY");

function decrypt(encryptedMessage, key) {
  let letters = {};

  let counter = 1;
  for (let i = 65; i <= 90; i++) {
    letters[String.fromCharCode(i)] = counter;
    counter++;
  }

  const [messageValues, keyValues] = messageAndKeyValues(encryptedMessage, key);

  let encryptCode = [];
  for (let i = 0; i < messageValues.length; i++) {
    messageValues[i] - keyValues[i] < 1
      ? encryptCode.push(messageValues[i] - keyValues[i] + 26)
      : encryptCode.push(messageValues[i] - keyValues[i]);
  }

  let decryptedKey = "";
  for (let i = 0; i < encryptCode.length; i++) {
    for (const [key, value] of Object.entries(letters))
      if (encryptCode[i] === value) decryptedKey += key;
  }
  return decryptedKey;
}
console.log(decrypt(result, "AHY"));

function messageAndKeyValues(message, key) {
  const messageValues = message.split("").map((letter) => letters[letter]);
  const keyValues = key.split("").map((letter) => letters[letter]);
  return [messageValues, keyValues];
}
