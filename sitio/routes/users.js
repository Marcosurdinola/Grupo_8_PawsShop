var express = require('express');
var router = express.Router();
const loginValidator = require('../validations/loginValidator')

const {register, login, processLogin} = require('../controllers/userController');

/* GET users listing. */
router.get('/register', register);
router.get('/login', login);
router.post('/login', loginValidator,processLogin)

module.exports = router;
