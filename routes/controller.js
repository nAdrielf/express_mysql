const express = require('express');
const router = express.Router();
const db = require('../config/db_config');

router.get('/', (req, res) => {
  let sql = 'SELECT * FROM team_principles ';
  db.query(sql, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

router.get('/:id', (req, res) => {
  let sql = 'SELECT * FROM team_principles WHERE id = ?';
  db.query(sql, req.params.id, function (err, result) {
    //jgn lupa req.params.id
    if (err) throw err;
    res.json(result);
  });
});

router.post('/', (req, res) => {
  let sql = 'INSERT INTO team_principles SET ?';
  const params = req.body;
  db.query(sql, params, function (err, result) {
    //jgn lupa params
    if (err) throw err;
    res.json({ msg: 'new team has been added', result });
  });
});

// kl misal nama team principalnya diganti, otomatis hp dan nomor telepon diganti
router.put('/:id', (req, res) => {
  //kenalin dulu variabel yg mau diganti dengan req.body
  let id = req.body.id;
  let name = req.body.name;
  let phone = req.body.phone;
  let email = req.body.email;
  let sql = 'UPDATE team_principles SET name=?,phone=?,email=? WHERE id=?'; //gak bisa salah satu yg diisi/diganti, kudu diisi seua valuenya jgn lupa isi idnya juga
  db.query(sql, [name, phone, email, id], function (err, result) {
    if (err) throw err;
    res.json({
      msg: `team principal by id of ${req.params.id} has been changed`,
      result,
    });
  });
});

router.delete('/:id', (req, res) => {
  let sql = 'DELETE FROM team_principles WHERE id=?';
  db.query(sql, req.params.id, function (err, result) {
    if (err) throw err;
    res.json({
      msg: `racing team by id of ${req.params.id} has been deleted`,
      result,
    });
  });
});

module.exports = router;
