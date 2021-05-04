const express = require('express');
const router = express.Router();
const db = require('../services/db');

router.post('/', (req, res, next) => {
  console.log(typeof JSON.stringify(req.body.form.formItems) );
  db.query('INSERT INTO forms (name, form) VALUES (?, ?);', [req.body.form.name , JSON.stringify(req.body.form.formItems) ])
  .then(
    (resp)=>{
      console.log(resp);
      res.status(201).json({
        message: "forms created",
      })
    }
  )
  .catch((err) => {
    console.log(err)
    res.status(500).json({
      error: err,
    })
  }) ; 
});

module.exports = router;