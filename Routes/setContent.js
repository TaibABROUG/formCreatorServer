const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const FormModel = require('../model/forms');


router.post('/:idForm', (req, res, next)   => {
  console.log(req.body);

    FormModel.findOne({_id:req.params.idForm} ,(error, response) =>{
    if(error) {
        return next(error) ; 
    } else {
       let content = response.content 
       content.push( req.body.form)
        console.log(content);
   FormModel.findByIdAndUpdate(req.params.idForm , { content : content},{
          new: true
        },(error, data) => {
          if (error) {
              return next(error);
              console.log(error)
          } else {
              res.json(data)
              console.log( data,'intent successfully updated!')
          }
      } )

    }
})

  

  });

module.exports = router;