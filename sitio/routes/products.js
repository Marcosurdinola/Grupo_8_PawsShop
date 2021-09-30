var express = require('express');
var router = express.Router();

const {detail, edit, add, update} = require('../controllers/productsController')

/* products . */
router.get('/detail/:id', detail)
router.get('/productEdit/:id', edit)
router.put('/productUpdate/:id', update)
router.get('/productAdd', add)
module.exports = router;
