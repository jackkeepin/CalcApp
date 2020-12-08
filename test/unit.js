let chai = require("chai");
let logic = require("../logic");

suite("Test coin flip", function() {

  test("Test the coin flips properly", function() {
    // Initialise a counter.
    let counter = 0;

    for (let i=0; i<100; i++) {
      // Flip the coin.
      let flip = logic.flipCoin();

      // Test return type.
      chai.assert.isBoolean(flip, "Should be a Boolean");

      if (flip) {
        counter++;
      }
    }

    chai.assert.approximately(50, counter, 10);
  });

});

suite("Test the addNumber function", function() {

  test("Test the addNumber function", function() {
      let x = 2;
      let y = 9;
      let expected = 11;
      let actual = logic.addNumber(x,y);
      chai.assert.equal(actual, expected, "Function should return " + expected)
  });
});