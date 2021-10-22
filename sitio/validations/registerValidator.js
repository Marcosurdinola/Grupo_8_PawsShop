const {body,check} = require('express-validator');
const users = require('../data/users.json');

module.exports = [
   check('name')
       .notEmpty().withMessage('Campo obligatorio'),

  check('fullname')
    .notEmpty().withMessage('Campo obligatorio'),
           

check('email')
    .notEmpty().withMessage('Es obligatorio ingresar tu email').bail()
    .isEmail().withMessage('Email inválido'),

    body('email')
        .custom(value  => {
        let user = users.find(user => user.email === value);
        if (user){
                return false
        }else{
                return true
           }
       } ).withMessage('Este email ya esta registrado'),
 // minimo de contraseña
    check('password1')
        .isLength({
        min : 4,
          max : 12. 
     }).withMessage('Debe tener entre  4 y  12 caracteres'),
    // evaluar contraseñas
  body('password2')
      .custom((value,{req}) => {
        if(value !== req.body.password){
             return false
          }else{
                return true
           }
      }).withMessage('Ingresaste mal'),

  check('terms')
      .isString('on').withMessage('Es obligatorio aceptar los términos y condiciones')
    
] 