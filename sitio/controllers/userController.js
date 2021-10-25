const bcrypt = require('bcryptjs');
const path = require('path');
const fs = require('fs');
let users = require(path.join(__dirname,'../data/users.json'));
const {validationResult} = require('express-validator')

const session = require('express-session');
//const { delete } = require('../routes/users');
module.exports = {
    register: (req, res) =>{
       return res.render('register')
    },
    processRegister : (req,res) => {
      let errors = validationResult(req);

      if(errors.isEmpty()){
         const {name,fullname,email,password1} = req.body;//vALORES DEL FORMULARIO
              //creo obj. usauario por defecto rol=user
              let user = {
         id : users.length != 0 ? users[users.length - 1].id + 1 : 1,
         name : name.trim(),
         fullname: fullname.trim(),
         email : email.trim(),
         password : bcrypt.hashSync(password1,10),
              //para fotito avatar por defecto
                avatar : 'logo.jpg',
         rol : "user"
          }
          users.push(user);
          fs.writeFileSync(path.join(__dirname,'../data/users.json'),JSON.stringify(users,null,3),'utf-8');
          //registro y levanto session
          req.session.userLogin = {
         id : user.id,
         name : user.name,
         fullname : user.fullname,
              avatar : user.avatar,
         rol : user.rol
          }
          //redirija a vista usuariom o home ('/') 
          return res.redirect('/users/profiles')
      }else{
          return res.render('register',{
              errores : errors.mapped(),
              old : req.body
          })
      }
  },
    login: (req, res) =>{
       return res.render('login')
    },
    //datos registrados del cliente
    processLogin : (req,res) => {
      let errors =  validationResult(req);
         
      if(errors.isEmpty()){
         let user = users.find(user => user.email === req.body.email);
         req.session.userLogin = {
          id : user.id,
          name : user.name,
          fullname : user.fullname,
               avatar : user.avatar,
          rol : user.rol
           
             }//checbox remenber para recordar usuario duracion
             if(req.body.remember){
                 res.cookie('forEver',req.session.userLogin,{maxAge : 1000 * 60})//puede ser tanto como se requiera
             }
             return res.redirect('/')
         }else{
             return res.render('login',{
                 errores : errors.mapped()
             })
         }
      },
         
  logout : (req,res) => {
   //matar a la cookies
   /***    delete req.session.userLogin
   if (req.cookies.forEver) {
       res.cookie('forEver',' ' ,{maxAge : -1} )
   }

    res.redirect('/')*/
   req.session.destroy()
   
   res.redirect('/')
},
//perfil de usuario renderisa vista si esta logeado

profiles  : (req,res) => {
     let users = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/users.json'),'utf-8'));
        return res.render('profiles',{
            user : users.find(user => user.id === req.session.userLogin.id)
        })
    }
}