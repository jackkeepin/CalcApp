let logic = require("./logic");

function coinFlipRoute(request, response) {
  let flip = logic.flipCoin();

  if (flip) {
    response.send("Heads");
  } else {
    response.send("Tails");
  }
}

function addNumbersRoute(request, response) {
  response.send(request.params);
}

module.exports.coinFlipRoute = coinFlipRoute;
module.exports.addNumbersRoute = addNumbersRoute;