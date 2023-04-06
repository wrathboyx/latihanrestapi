"use strict";

module.exports = function (app) {
  var myjson = request("./controller");

  app.route("/").get(myjson.index);
};
