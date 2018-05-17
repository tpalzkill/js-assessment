exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    // MASK?
    let bitNum = num.toString(2);
    return bitNum;
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    let bit = num.toString(2);
    while (bit.length < 8) {
      bit = '0'.concat(bit);
    }
    return bit;
  },

  multiply: function(a, b) {
    a = a * 1000, b = b * 1000;
    let product = a * b;
    return product / 1000000;
  }
};
