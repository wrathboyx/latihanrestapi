const jwt = require("jsonwebtoken");
const config = require("../config/secret");

function verifikasi(roles) {
  return function (req, res, next) {
    // Cek authorization header
    var tokenwithBearer = req.headers.authorization;
    if (tokenwithBearer) {
      var token = tokenwithBearer.split(" ")[1];
      // Verifikasi
      jwt.verify(token, config.secret, function (err, decoded) {
        if (error) {
          return rest
            .status(401)
            .send({ auth: false, message: "Token tidak terdapat" });
        } else {
          if (roles == 2) {
            req.auth = decoded;
            next();
          } else {
            return rest
              .status(401)
              .send({ auth: false, message: "Gagal authorisasi role Anda!" });
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
