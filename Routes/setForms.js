const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const FormModel = require('../model/forms');


router.post('/', (req, res, next) => {
  console.log(req.body);
 

const forms = new FormModel({
  _id: new mongoose.Types.ObjectId(),
  name: req.body.form.name,
  form: JSON.stringify(req.body.form.formItems),
  content : [] 
})
  forms
    .save()
    .then((result) => {
      console.log(result)
      res.status(201).json({
        message: "forms created",
      })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({
        error: err,
      })
    })

});

module.exports = router;