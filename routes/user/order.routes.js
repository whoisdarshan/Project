const express=require('express');
const orderRoutes=express.Router();
const {upload}=require('../../helpers/imageUpload');
const { userverifyToken }=require('../../helpers/verifyToken');
const { addToOrder, getOrder, getAllOrder, deleteOrder } = require('../../controller/user/order.controller');

orderRoutes.post('/add-order',upload.any(),userverifyToken,addToOrder);
orderRoutes.get('/get-order',upload.any(),userverifyToken,getOrder);
orderRoutes.get('/getall-order',upload.any(),userverifyToken,getAllOrder);
orderRoutes.delete('/delete-order',upload.any(),userverifyToken,deleteOrder);

module.exports=orderRoutes;