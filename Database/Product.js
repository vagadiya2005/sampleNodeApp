const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  
    TechnicalName: String,
    CASno: String,
    ChemicalStructure: String,
    Packing: String,
    Tag: String

});

module.exports = new mongoose.model("products", productSchema);
