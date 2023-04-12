var express = require("express");
var auth = require("./auth");
var router = express.Router();
var verifikasi = require("./verifikasi");

// Daftarkan menu regristrasi
router.post("/api/v1/register", auth.register);
router.post("/api/v1/login", auth.login);

// Alamat yang perlu otorisasi
router.get("/api/v1/secretpage", verifikasi(), auth.secretPage);

module.exports = router;
