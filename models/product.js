let mongoose = require('mongoose');

const productCollectionSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    provider: {
        type: String,
        required: true
    },
    components: {
        type: String,
        required: true
    }
});

const productCollection = mongoose.model('products', productCollectionSchema);

const Products = {
    createProduct: function(newProduct) {
        return productCollection
            .create(newProduct)
            .then(createdProduct => {
                return createdProduct;
            })
            .catch(err => {
                return err;
            })
    },
    getAllProducts: function() {
        return productCollection
            .find()
            .then(allProducts => {
                return allProducts;
            })
            .catch(err => {
                return err;
            })
    }

}

module.exports = { Products };
//get all products
//get product by name
//delete product by id
//update product
//add new product