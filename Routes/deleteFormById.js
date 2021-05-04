const express = require('express');
const router = express.Router();
const db = require('../services/db');


router.delete('/:idForm', (req, res, next) => {
  const rows=  db.query('DELETE FROM contents where idForm = ? ;', [req.params.idForm]).then((response)=> {

    const rows=  db.query('DELETE FROM forms where _id = ? ;', [req.params.idForm]).then((response)=> {

      res.status(200).json({name: response.name});
    }) ; 
  }) ; 

});
  module.exports = router;


