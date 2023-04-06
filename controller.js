"use strict";

var response = require("./res");
var connection = require("./connect");

exports.index = function (req, res) {
  response.ok("Applikasi Rest API ku berjalan", res);
};

// Menampilkan semua data mahasiswa
exports.tampilkan = function (req, res) {
  connection.query("SELECT * FROM mahasiswa", function (error, rows, fields) {
    if (error) {
      connection.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};
