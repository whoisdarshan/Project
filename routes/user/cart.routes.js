const express = require('express');
const cartroutes= express.Router();
const{upload}=require('../../helpers/imageUpload');
const {userverifyToken}=require('../../helpers/verifyToken');
const { addCart, getAllCarts, updateCart}=require('../../controller/user/cart.controller');

cartroutes.post('/add-cart',upload.none(),userverifyToken,addCart);
cartroutes.get('/getall-cart',upload.none(),userverifyToken,getAllCarts);
cartroutes.put('/update-cart',upload.none(),userverifyToken,updateCart);

module.exports= cartroutes;