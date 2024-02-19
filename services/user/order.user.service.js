const order=require('../../models/order.model');

module.exports=class orderServices{
    async addorder(body){
        try {
            return order.create(body)
        } catch (error) {
            console.log({error,message:"Error add order  services"});
            return error.message; 
        }
    };

    async getAllOrder(body){
        try {
            return order.find(body);
        } catch (error) {
            console.log({error,message:"Error getAll order  services"});
            return error.message; 
        }
    };

    

    async getOrder(id){
        try {
            return order.findOne(id);
        } catch (error) {
            console.log({error,message:"Error get order  services"});
            return error.message;
        }
    };

    async deleteOrder(id,body){
        try {
            return order.findByIdAndDelete(id,{$set:body},{new:true});
        } catch (error) {
            console.log({error,message:"Error delete order  services"});
            return error.message;
        }
    }
}