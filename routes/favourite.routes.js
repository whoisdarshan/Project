const express = require('express');
const favouriteroutes= express.Router();
const {upload}= require('../helpers/imageUpload');
const { userverifyToken } = require("../helpers/verifyToken");
const { addFavourite, getAllFavourite }= require('../controller/Favourite/favourite.controller');

favouriteroutes.post('/add-favourite',upload.none(),userverifyToken,addFavourite);
favouriteroutes.get('/getall-favourite',upload.none(),userverifyToken,getAllFavourite);


module.exports=favouriteroutes;