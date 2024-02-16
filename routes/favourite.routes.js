const express = require('express');
const favouriteroutes= express.Router();
const {upload}= require('../helpers/imageUpload');
const { userverifyToken } = require("../helpers/verifyToken");
const { addFavourite, getAllFavourite, getSpecificFavourite }= require('../controller/Favourite/favourite.controller');

favouriteroutes.post('/add-favourite',upload.none(),userverifyToken,addFavourite);
favouriteroutes.get('/getall-favourite',upload.none(),userverifyToken,getAllFavourite);
favouriteroutes.get('/getspecific-favourite',upload.none(),userverifyToken,getSpecificFavourite);
// favouriteroutes.delete('/delete-favourite',upload.none(),userverifyToken,deleteFavourite);
// favouriteroutes.put('/update-favourite',upload.none(),userverifyToken,updateFavourite);


module.exports=favouriteroutes;