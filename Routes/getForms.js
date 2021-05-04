const express = require('express');
const router = express.Router();
const db = require('../services/db');

router.get('/', (req, res, next) => {
  const rows=  db.query('SELECT * FROM forms').then((response)=> {
    if (response.length===0)
    return res.status(400).send({message:"empty data"});
    res.send(response);
  }) ; 
 

});
  module.exports = router;


