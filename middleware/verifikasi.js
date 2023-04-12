const jwt = require("jsonwebtoken");
const config = require("../config/secret");

function verifikasi(roles) {
  return function (req, rest, next) {
    var role = req.body.role;

    // Cek authorization header
    var tokenwithBearer = req.headers.authorization;
    if (tokenwithBearer) {
      var token = tokenwithBearer.split(" ")[1];
      // Verifikasi
      jwt.verify(token, config.secret, function (err, decoded) {
        if (err) {
          return rest
            .status(401)
            .send({ auth: false, message: "Token tidak terdapat" });
        } else {
          if (role == 2) {
            req.auth = decoded;
            next();
          } else {
            return rest
              .status(401)
              .send({ auth: false, message: "Gagal otorisasi role Anda!" });
          }
        }
      });
    } else {
      return rest
        .status(401)
        .send({ auth: false, message: "Token tidak tersedia!" });
    }
  };
}

module.exports = verifikasi;
