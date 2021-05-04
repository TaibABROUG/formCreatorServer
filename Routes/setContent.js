const express = require('express');
const router = express.Router();
const db = require('../services/db');

router.post('/:idForm', (req, res, next)   => {
  console.log(req.body);
  db.query('INSERT INTO contents (content , idForm) VALUES (?, ?);', [JSON.stringify(req.body.form) ,req.params.idForm ])
  .then(
    (resp)=>{
        res.status(201).json({
          message: "content created",
        })
      console.log(resp);
    }
  ) ; 
  });

module.exports = router;