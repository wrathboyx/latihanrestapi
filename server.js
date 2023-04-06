const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Parse application
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Panggil routes.js
var routes = require("./routes");
routes(app);

app.listen(3000, () => {
  console.log(`Server started on port`);
});
