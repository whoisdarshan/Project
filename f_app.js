require('dotenv').config();
const express = require('express');
const server = express(); 
const cors = require('cors');
const path = require('path');
const imagePath = path.join(__dirname,'public','images');

PORT= process.env.PORT;
dbURL = process.env.MONGO_URL;

const { default: mongoose } = require('mongoose');

server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(cors());
server.use('/public/images',express.static(imagePath));

server.get('/',(req,res)=>
{
   res.json({message : 'welcome to express server'});
});

const userRoutes= require("./routes/user/user.routes");
const adminroutes=require('./routes/admin/admin.routes');
const productroutes=require('./routes/admin/product.admin.routes');
const productuserroutes= require('./routes/user/product.routes');
const favouriteroutes= require('./routes/favourite.routes');
const cartroutes= require('./routes/user/cart.routes');
const orderRoutes=require('./routes/user/order.routes');

// const productroutes= require("./routes/fproduct.routes");

server.use('/api/user',userRoutes);
server.use('/api/admin',adminroutes);
server.use('/api/product/admin',productroutes);
server.use('/api/product/user',productuserroutes);
server.use('/api/favourite',favouriteroutes);
server.use('/api/cart',cartroutes);
server.use('/api/order',orderRoutes)
// server.use('/api/fproduct',productroutes);




server.listen(PORT,()=>
{
   try  {
         mongoose.connect(dbURL);
         console.log('mongodb start');
     } catch (error) {
       handleError(error);
     }
   console.log(`server is start at http://localhost:3456`);
})