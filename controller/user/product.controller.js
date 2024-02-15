const ProductServices= require('../../services/user/product.user.service');

const productservice= new ProductServices();

exports.getAllProducts = async(req,res)=>
{
    try {
        let product= await productservice.getAllProduct(req.query);
        if(!product){
            return res.json({message:"Product is not exist..."});
        }
        // res.json({product});
        res.json(product)
    } catch (error) {
        console.log(error);
        res.json({message:"internal server error in get all products controller..."});   
    }
};

exports.getSpecificProduct= async(req,res)=>
{
    try {
        let product = await productservice.getspecificProduct(req.body.productId);
        if(!product){
            return res.json({message:"product is not exist..."});
        }
        
    } catch (error) {
        console.log(error);
        res.json({message:"internal server error in get-specific products controller..."});   
    }
}