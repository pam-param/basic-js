const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value = ' ') {
    this.chain.push(String(value));
    return this;
  },

  removeLink(position) {
    if (typeof(position) !== 'number' || this.chain[position - 1] === undefined) {
      this.chain = [];
      throw new Error('Invalid position value!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },
  
  finishChain() {
    let stringChain = '';
    for (let link of this.chain) {
      stringChain = `${stringChain}( ${link} )~~`;
    }
    this.chain = [];

    return stringChain.slice(0, -2);
  }
};

module.exports = chainMaker;
