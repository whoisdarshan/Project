const express=require('express');
const productroutes= express.Router();
const {upload }= require ('../../helpers/imageUpload');
const {addProducts, getAllProducts, getspecificProduct, updateProduct, deleteProuct} = require('../../controller/admin/product.admin.controller');

productroutes.post('/add-product',upload.single('profile'),addProducts)
productroutes.get('/getall-product',upload.none(),getAllProducts);
productroutes.get('/getspecific-product',upload.none(),getspecificProduct);
productroutes.put('/update-product',upload.none(),updateProduct);
productroutes.delete('/delete-product',upload.none(),deleteProuct);

module.exports=productroutes;