var express = require('express');
var router = express.Router();

const {detail, edit, add} = require('../controllers/productsController')

/* products . */
router.get('/detail/:id', detail)
router.get('/productEdit', edit)
router.get('/productAdd', add)
module.exports = router;
