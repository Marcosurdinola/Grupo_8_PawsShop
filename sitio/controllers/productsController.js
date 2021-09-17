const fs = require('fs');
const path = require('path');
let  products = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8'));

module.exports = {
    detail: (req, res) =>{
        return res.render('detalleProducto',{
            product : products.find(product => product.id === +req.params.id)
        })
    },
    edit: (req, res) =>{
        return res.render('productEdit')
    },
    add: (req, res) =>{
        return res.render('productAdd')
    }
}