const express = require('express');
const router = express.Router();
const db = require('../config/db_config');

router.get('/', (req, res) => {
  let sql = 'SELECT * FROM team_principles ';
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

module.exports = router;
