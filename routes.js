"use strict";

module.exports = function (app) {
  var myjson = require("./controller");

  app.route("/").get(myjson.index);

  app.route("/tampil").get(myjson.tampilkan);

  app.route("/tampil/:id").get(myjson.tampilkanid);

  app.route("/tambah").post(myjson.tambahMahasiswa);

  app.route("/ubah").put(myjson.ubahMahasiswa);
};
