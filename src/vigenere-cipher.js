const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  static #SPACE_CODE = 32;
  static #A_CODE = 65;
  static #Z_CODE = 90;
  static #TABLE = VigenereCipheringMachine.generateVigenereTable();

  static generateVigenereTable() {
    let alphabet = '';
    for (let i = VigenereCipheringMachine.#A_CODE; i <= VigenereCipheringMachine.#Z_CODE; i++) {
      alphabet += String.fromCodePoint(i);
    }

    let table = [];
    const size = 26;

    for (let i = 0; i < size; i++) {
      let row = alphabet.slice(i) + alphabet.slice(0, i);
      table.push(row.split(''));
    }

    return table;
  }
  
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  } 

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Message and key arguments are mandatory!");
    }

    let ceilKeyString = key.repeat(Math.ceil(message.length / key.length));
    ceilKeyString = ceilKeyString.toUpperCase();
    const upperMessage = message.toUpperCase();

    let encryptedMessage = '';
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      let rowIndex = ceilKeyString.charCodeAt(j) - VigenereCipheringMachine.#A_CODE;
      let colIndex = upperMessage.charCodeAt(i) - VigenereCipheringMachine.#A_CODE;

      if (rowIndex < 0 || colIndex < 0) {
        encryptedMessage += message[i];
      } else {
        let encryptedLetter = VigenereCipheringMachine.#TABLE[rowIndex][colIndex];
        encryptedMessage += encryptedLetter ? encryptedLetter : message[i]; 
      }

      if (message.charCodeAt(i) !== VigenereCipheringMachine.#SPACE_CODE) {
        j++;
      }
    }

    if (this.isDirect) {
      return encryptedMessage;
    }

    return encryptedMessage.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Message and key arguments are mandatory!");
    }
  
    let ceilKeyString = key.repeat(Math.ceil(message.length / key.length));
    ceilKeyString = ceilKeyString.toUpperCase();
  
    let decryptedMessage = '';
    let j = 0;
  
    for (let i = 0; i < message.length; i++) {
      let rowIndex = ceilKeyString.codePointAt(j) - VigenereCipheringMachine.#A_CODE;
      let colIndex = VigenereCipheringMachine.#TABLE[rowIndex].indexOf(message[i]);
  
      if (rowIndex < 0 || colIndex < 0 || rowIndex > 25) {
        decryptedMessage += message[i];
      } else {
        decryptedMessage += String.fromCodePoint(colIndex + VigenereCipheringMachine.#A_CODE); 
      }
  
      if (message.charCodeAt(i) !== VigenereCipheringMachine.#SPACE_CODE) {
        j++;
      }
    }

    if (this.isDirect) {
      return decryptedMessage;
    }
  
    return decryptedMessage.split('').reverse().join('');
  } 

}

module.exports = VigenereCipheringMachine;
