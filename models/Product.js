// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     price: { type: Number, required: true },
//     category: { type: String, required: true },
//     description: { type: String, required: false }
// });

// const Product = mongoose.model('Product', productSchema);

// module.exports = Product;


const mongoose = require("mongoose");

const collection = "data-collections";  // colletion of database.

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    sem: { type: Number, required: true },
    email: { type: String, required: true }
});

module.exports = mongoose.model(collection, productSchema);  
