"use strict";

exports.ok = function (values, res) {
  var data = {
    status: 200,
    values: values,
  };

  res.json(data);
  res.end();
};

// Response untuk nested matakuliah
exports.oknested = function (values, res) {
  // Lakukan akumulasi
  const hasil = values.reduce((akumulasikan, item) => {
    // tentukan keygroup
    if (akumulasikan[item.nama]) {
      // buat variabel group nama mahasiswa
      const group = akumulasikan[item.nama];
      // check jika isi array adalah matakuliah
      if (Array.isArray(group.matakuliah)) {
        // tambahkan value kedalam group mata kuliah
        group.matakuliah.push(item.matakuliah);
      } else {
        group.matakuliah = [group.matakuliah, item.matakuliah];
      }
    } else {
      akumulasikan[item.nama] = item;
    }
    return akumulasikan;
  }, {});

  var data = {
    status: 200,
    values: hasil,
  };

  res.json(data);
  res.end();
};
