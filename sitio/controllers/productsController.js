const fs = require('fs');
const path = require('path');
let products = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8'));
let categories = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','categories.json'),'utf-8'));

module.exports = {
    detail: (req, res) =>{
        return res.render('detalleProducto',{
            product : products.find(product => product.id === +req.params.id)
        })
    },
    edit: (req, res) =>{
        return res.render('productEdit', {
            product : products.find(product => product.id === +req.params.id),
            categories
        })
    },
    update: (req, res) =>{
        const {name,description,price,discount,category, features} = req.body;
        let product = products.find(product => product.id === +req.params.id);

        let productModified = {
            id : +req.params.id,
            name: name.trim(),
            price: price,
            description: description,
            discount: discount,
            image: product.image,
            category,
            features: features
        }
        let productsModified = products.map(product => product.id === +req.params.id ? productModified : product);
    
            fs.writeFileSync(path.join(__dirname,'..','data','products.json'),JSON.stringify(productsModified,null,3),'utf-8');
    
            return res.redirect('/admin')
    },

    add: (req, res) =>{
        return res.render('productAdd',{
            categories
        })
    },
    store: (req, res) => {
        const {name,description,price,discount,category, features} = req.body;

        let product = {
            id : products[products.length - 1].id + 1,
            name : name.trim(),
            price : +price,
            description : description.trim(),
            discount : +discount,
            image : 'default.jpg',
            category,
            features
        }
        products.push(product);

        fs.writeFileSync(path.join(__dirname,'..','data','products.json'),JSON.stringify(products,null,3),'utf-8');

        return res.redirect('/admin')
    },

    destroy: (req, res) =>{
        
    }
}