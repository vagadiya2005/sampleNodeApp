const Product = require('../models/Product');  // Ensure this path matches your project structure

exports.addProduct = async (req, res) => {
    try {
        let newProduct = new Product({

            name: req.body.name,
            age: req.body.age,
            sem: req.body.sem,
            email: req.body.email,
    
        });
        let result = await newProduct.save();
        console.log(result);
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send({ message: "Failed to add data", error: error.message });
    }
};

exports.getProductsByCategory = async (req, res) => {
    try {
        // const { category } = req.params;
        let products = await Product.find();  // Changed to 'Tag' to match the schema
        if (products.length > 0) {
            res.send(products);
        } 
        else 
        {
            res.status(404).send({ result: "No data found" });
        }
    } catch (error) {
        res.status(500).send({ message: "Failed to fetch data", error: error.message });
    }
};
    
exports.deleteData = async (req,res)=>{

    try{

        let deletedata = await Product.deleteOne({name: req.body.name});

        if(deletedata.acknowledged == true){
            res.send({result: "data deleted successfully!"});
        }else{
            res.send({result: "data not found!"});
        }

    }   catch(error){

        res.status(500).send({ message: "Failed to delete data", error: error.message });

    }


};