const orderServices=require('../../services/user/order.user.service');
const orderservice=new orderServices();
const cartServices=require('../../services/user/cart.user.service');
const cartservice=new cartServices();

exports.addToOrder=async(req,res)=>
{
    try {
        let cart = await cartservice.showAllCart(req.query,req.user)
        // console.log(cart);
        if(!cart){
            return res.json({message:"Cart is empty .."})
        }
        let orderItem=cart.map((item)=>({
            cartItem :item.cartItem._id,
            quantity: item.quantity,
            price : item.cartItem.price

        }));

        let totalPrice=orderItem.reduce((total,item)=>(total+=(item.quantity*item.price)),0);
        let newOrder={
            user: req.user._id,
            items:orderItem,
            totalAmount :totalPrice
        }
        await orderservice.addorder(newOrder);
        await cartservice.updateManyCart(req.user._id,{isDelete:true});
        res.json({message:"Order to create success"})
    } catch (error) {
        console.error(error);
        return res.json({ message: "Internal Server Error in add order controller.." });
    };
};

exports.getOrder=async(req,res)=>
{
    try {
        let order = await orderservice.getOrder(req.body.orderId);
        if(!order){
            return res.json({message:"Order is empty"})
        };
        res.json(order);
    } catch (error) {
        console.error(error);
        return res.json({ message: "Internal Server Error in getorder controller.." });
    }
};

exports.getAllOrder=async(req,res)=>
{
    try {
        let order= await orderservice.getAllOrder({user:req.user._id})
        if(!order){
            return res.json({message:"Order is empty"})
        };
        res.json(order);
    } catch (error) {
        console.error(error);
        return res.json({ message: "Internal Server Error in get all order controller.." });   
    }
};

exports.deleteOrder=async(req,res)=>
{
    try {
        let order = await orderservice.deleteOrder(req.body.orderId);
        // console.log(order);
        if(!order){
            return res.json({message:"Order is empty"});
        }
        res.json(order);
    } catch (error) {
        console.error(error);
        return res.json({ message: "Internal Server Error in delete order controller.." });  
    }
}