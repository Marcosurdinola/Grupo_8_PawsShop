const bcrypt = require('bcryptjs');
const path = require('path');
const fs = require('fs');
const users = require(path.join(__dirname,'../data/users.json'));
const {validationResult} = require('express-validator')


module.exports = {
   register: (req, res) => {
      return res.render('register')
   },

   login: (req, res) => {
      return res.render('login')
   },

   processLogin: (req, res) => {
      let errors = validationResult(req);
      return res.send(errors)
      if(errors.isEmpty()){
          let user = users.find(user => user.email === req.body.email);
          req.session.userLogin = {
              id : user.id,
              name : user.name,
              rol : user.rol
      }
      return res.redirect('/')
      }else{
         return res.render('login',{
          errores : errors.mapped()
         })
   }
   
}
}