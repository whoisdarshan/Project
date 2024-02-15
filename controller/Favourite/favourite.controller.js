const favouriteServices=require('../../services/favourite.service');
const favouriteservice=new favouriteServices();

exports.addFavourite=async(req,res)=>
{
    try {
        let favourite= await favouriteservice.getFavourite({favouriteItem:req.body.favouriteItem,user:req.user._id,isDelete:false});
        if(favourite){
            return res.json({message:"favourite item   is already exist..."})
        }
        favourite= await favouriteservice.addToFavourite({...req.body,user : req.user._id});
        res.json({favourite,message:"add favourite success..."});
    } catch (error) {
        console.log({error,message:"Error is in add favourite service"});
        return error.message;
    }
};

exports.getAllFavourite=async(req,res)=>
{
    try {
        let favourite = await favouriteservice.getAllFavourite({isDelete:false});
        res.json(favourite);
    } catch (error) {
        console.log({error,message:"Error is in get all favourite service"});
        return error.message;   
    }
}