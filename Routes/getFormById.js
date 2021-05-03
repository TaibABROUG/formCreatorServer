const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const FormModel = require("../model/forms")


router.get('/:idForm', (req, res, next) => {
  console.log(req.params.idForm);
  FormModel.findOne({_id:req.params.idForm} ,(error, response) =>{
    if(error) {
        return next(error) ; 
    } else {
        console.log(response);
        res.status(200).json({name: response.name , form: JSON.parse(response.form)});
    }
})
});
  module.exports = router;


