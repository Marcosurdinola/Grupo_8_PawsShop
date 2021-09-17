const fs = require('fs');
const path = require('path');
let  products = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8'));

module.exports = {
    index: (req, res) =>{
       return res.render('home',{
          products
       })
    },

    carrito: (req, res) =>{
       return res.render('carrito', {
          products
       })
    },
    admin: (req, res) =>{
       return res.render('admin')
    }
}