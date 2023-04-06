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
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan semua data mahasiswa berdasarkan ID
exports.tampilkanid = function (req, res) {
  let id = req.params.id;
  connection.query(
    "SELECT * FROM mahasiswa where id_mahasiswa = ?",
    [id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};
