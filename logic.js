function flipCoin() {
  /**
   * Return true for heads, false for tails.
   */
  return Math.random() > 0.5;
}

function addNumber(x, y) {
  return x + y;
}

module.exports.flipCoin = flipCoin;
module.exports.addNumber = addNumber;