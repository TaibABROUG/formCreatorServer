const express = require('express');
const router = express.Router();
const db = require('../services/db');

router.get('/:idForm', (req, res, next) => {
  const rows=  db.query('SELECT * FROM forms WHERE _id = ?' , [req.params.idForm]).then((response)=> {
    console.log (response[0].form) ; 
    res.status(200).json({name: response.name , form: JSON.parse(response[0].form)});
  }) ; 
});
  module.exports = router;


