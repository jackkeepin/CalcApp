let express = require("express");
let routes = require("./routes");
let port = 9000;

let app = express();

app.get("/flip", routes.coinFlipRoute);

app.get("/add/:num1/:num2", routes.addNumbersRoute);

module.exports.app = app;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});