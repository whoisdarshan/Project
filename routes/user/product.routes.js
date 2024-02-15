const express= require('express');
const productuserroutes= express.Router();

const {upload}=require('../../helpers/imageUpload');
const { getAllProducts, getSpecificProduct }= require('../../controller/user/product.controller');

productuserroutes.get('/getall-product',upload.none(),getAllProducts);
productuserroutes.get('/getspecific-product',upload.none(),getSpecificProduct);

module.exports=productuserroutes;