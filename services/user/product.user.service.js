const product = require('../../models/product.model');

module.exports = class ProductServices {
    // get all products
    async getAllProduct(query) {
        try {
            let condition = { isDelete: false }
            return product.find({ ...condition }).select({
                title: 1,
                price: 1,
                profile:1
            });
        } catch (error) {
            console.log({ error, message: "Error is in get all products-service" });
            return error.message;
        }
    };

    // get specific product
    async getspecificProduct(body) {
        try {
            return product.findOne(body);
        } catch (error) {
            console.log({ error, message: "Error is in get specific products-service" });
            return error.message;
        }
    }
}