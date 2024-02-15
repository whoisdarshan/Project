const jwt = require('jsonwebtoken');
const user= require('../models/user.model');


exports.userverifyToken = async (req,res,next)=>
{
    try {
        const authorized = req.headers['authorization'];
        if(typeof authorized !=='undefined')
        {
            let token = authorized.split(" ")[1];
            // console.log(token)
            const {userId}= jwt.verify(token,'darshan');  // darshan is a secret key ...
            // console.log(userId);
            req.user= await  user.findOne({_id : userId,isDelete : false});
            // console.log(req.user);
            req.user? next(): res.json({message:'Invalid user'});
        }
    } catch (error) {
        console.log(error);
        res.json({message:"Internal Server Error in verify token. "})
    }
}


exports.adminverifyToken = async (req,res,next)=>
{
    try {
        const authorized = req.headers['authorization'];
        if(typeof authorized !=='undefined')
        {
            let token = authorized.split(" ")[1];
            // console.log(token)
            const {adminId}= jwt.verify(token,'darshan');  // darshan is a secret key ...
            // console.log(userId);
            req.admin= await  user.findOne({_id : adminId,isDelete : false});
            // console.log(req.user);
            req.admin? next(): res.json({message:'Invalid user'});
        }
    } catch (error) {
        console.log(error);
        res.json({message:"Internal Server Error in verify token. "})
    }
}