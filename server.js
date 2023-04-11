const express = require("express");
const bodyParser = require("body-parser");

var morgan = require("morgan");
const app = express();

// Parse application
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

// Panggil routes.js
var routes = require("./routes");
routes(app);

// Daftarkan menu routes dari index.js
app.use("/auth", require("./middleware"));

app.listen(4000, () => {
  console.log(`Server started on port`);
});
