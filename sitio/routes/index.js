var express = require('express');
var router = express.Router();

const {index, carrito, admin} = require('../controllers/mainController')

/* GET home page. */
router.get('/', index);
router.get('/carrito', carrito)
router.get('/admin', admin)

module.exports = router;