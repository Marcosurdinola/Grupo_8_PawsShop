const bcrypt = require('bcryptjs');
const path = require('path');
const fs = require('fs');
let users = require(path.join(__dirname,'../data/users.json'));
const {validationResult} = require('express-validator')

const session = require('express-session');
module.exports = {
    register: (req, res) =>{
       return res.render('register')
    },
    processRegister : (req,res) => {
      return res.send(req.body)
    },

    login: (req, res) =>{
       return res.render('login')
    },
    //datos registrados del cliente
    processLogin : (req,res) => {
      return res.send(red.body)
  },
  logout : (req,res) => {
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