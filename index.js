const express = require('express');
require('./Database/config');
const app = express();
const cors = require('cors');
const port = 5600;
app.use(cors({
    origin: "*",
    methods: ["GET","POST","DELETE","PUT"],
}


));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


const user = require('./Database/User');
const product = require('./Database/Product');

app.use(express.json());

app.post('/register', async (req, res) => {

    let data = new user(req.body);
    let result = await data.save();
    result = result.toObject();
    delete result.password;
    console.log(result);

})

app.post('/login', async (req, res) => {

    let data = await user.findOne(req.body).select("-password");

    if (data) {
        res.send({ message: "Login Successfull", data: data })
    }
    else {
        res.send({ message: "Login Failed", data: data })
    }

});

app.post('/add-product', async (req, res) => {

    let data = new product(req.body);
    let result = await data.save();
    result = result.toObject();

    console.log(result);

    // console.log(JSON.stringify(result));

});

app.get('/products/:category', async (req, res) => {

    let tag = req.params.category;

    let data = await product.find({ Tag: tag });

    if (data.length > 0) {
        res.send(data)
    } else {
        res.send({ result: "No data Found" });
    }


});






app.listen(port);