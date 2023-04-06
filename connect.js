var mysql = require("mysql");

// Buat koneksi Database
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbrestapi",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("mysql has connect");
});

module.exports = conn;
