var express = require('express');
var router = express.Router();

const {index, carrito, admin} = require('../controllers/mainController');
const { profiles } = require('../controllers/userController');

/* GET home page. */
router.get('/', index);
router.get('/carrito', carrito)
router.get('/admin', admin)
router.get('/profiles', profiles)

module.exports = router;