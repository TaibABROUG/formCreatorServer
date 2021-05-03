const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const FormModel = require("../model/forms")


router.get('/', (req, res, next) => {

  FormModel.find().exec((err, forms) => {
 
    if (err) return res.status(400).send(err)
    if (forms.length===0)
    return res.status(400).send({message:"empty data"})
    // res.send(JSON.parse(forms[forms.length - 1].form))
    res.send(forms) 
  })
});
  module.exports = router;


