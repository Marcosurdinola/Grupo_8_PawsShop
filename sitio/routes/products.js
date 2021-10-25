var express = require('express');
var router = express.Router();

const {detail, edit, add, update, destroy, store} = require('../controllers/productsController')

/* products . */
router.get('/detail/:id', detail)
router.get('/productEdit/:id', edit)
router.put('/productUpdate/:id', update)
router.get('/productAdd', add)
router.post('/productAdd', store)
router.delete('/productDestroy/:id', destroy)
module.exports = router;
