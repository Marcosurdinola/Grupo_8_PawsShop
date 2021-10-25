var express = require('express');
var router = express.Router();
const registerValidator = require('../validations/registerValidator');

const loginValidator = require('../validations/loginValidator');

const userLoginCheck = require('../middlewares/userLoginCheck');
const notEntry = require('../middlewares/notEntry');
//validar perfil
//const profileValidator = require('../validations/profileValidator');
//
//images const upload = require('../middlewares/muterImageUser');

                         // , update
const {register,processRegister,login,processLogin,logout,profiles} = require('../controllers/userController');

/* GET users listing. */
router.get('/register',notEntry, register);
//procesa registro
router.post('/register',registerValidator, processRegister);
router.get('/login',notEntry, login);//
router.post('/login',loginValidator, processLogin);
router.get('/logout', logout);
router.get('/profiles',userLoginCheck, profiles);
module.exports = router;
