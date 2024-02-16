const favouriteServices=require('../../services/favourite.service');
const favouriteservice=new favouriteServices();

exports.addFavourite=async(req,res)=>
{
    try {
        let favourite= await favouriteservice.checkFavourite({favouriteItem:req.body.favouriteItem,user:req.user._id});
        if(favourite){
            await favouriteservice.deleteFavourite(favourite._id)
            return res.json({message:"Unfavourite successfully ",isFavourite:0})
        }
        else{
             await favouriteservice.addToFavourite({...req.body,user : req.user._id});
            res.json({message:"add favourite success...",isFavourite:1});
        }
       
    } catch (error) {
        console.log({error,message:"Error is in add favourite controller"});
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
};

exports.getSpecificFavourite= async(req,res)=>
{
        try {
            let favourite= await favouriteservice.checkFavourite({user:req.user._id,isDelete:false});
            console.log(favourite);
            if(!favourite){
                return res.json({message:"favourite item is already exist..."})
            }
            res.json(favourite)
        } catch (error) {
            console.log({error,message:"Error is in get specific  favourite controller"});
            return error.message;
        }
};


