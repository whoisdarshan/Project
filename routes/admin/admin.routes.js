const express= require('express');
const adminroutes=express.Router();
const { adminverifyToken } = require("../../helpers/verifyToken");
const {upload}=require('../../helpers/imageUpload');
const {addnewadmin, adminlogin, getAdmin, updateAdminProfile, deleteAdminProfile, updateAdminPassword}=require('../../controller/admin/admin.controller');
  
adminroutes.post('/register',upload.single("profile"),addnewadmin);
adminroutes.post('/login',upload.none(),adminlogin);
adminroutes.get('/get-admin',upload.none(),adminverifyToken,getAdmin);
adminroutes.put('/update-profile',upload.none(),adminverifyToken,updateAdminProfile);
adminroutes.put('/update-password',upload.none(),adminverifyToken,updateAdminPassword);
adminroutes.delete('/delete-profile',upload.none(),adminverifyToken,deleteAdminProfile);


module.exports=adminroutes;