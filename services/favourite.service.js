const favourite = require('../models/favourite.model');

module.exports= class favouriteServices{
    // add favourite
    async addToFavourite(body){
        try {
            return await favourite.create(body);
        } catch (error) {
            console.log({error,message:"Error is in add favourite  -service"});
            return error.message;
        }
    };

    //get favourite
    async getFavourite(body){
        try {
            return await favourite.findOne(body);
        } catch (error) {
            console.log({error,message:"Error is in get favourite service"});
            return error.message;
        }
    };

    //getall  favourite
    async getAllFavourite(body){
        try {
            return favourite.find(body);
        } catch (error) {
            console.log({error,message:"Error is in getall  favourite service"});
            return error.message;
        }
    };

    // update favourite
    async updateFavourite(id,body){
        try {
            return favourite.findByIdAndUpdate(id,{$set:body},{new:true});
        } catch (error) {
            console.log({error,message:"Error is in update favourite service"});
            return error.message;
        }
    }
}