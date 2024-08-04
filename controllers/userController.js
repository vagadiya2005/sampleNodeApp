const User = require('../models/User');

exports.register = async (req, res) => {
    try {
        let newUser = new User(req.body);
        let result = await newUser.save();
        result = result.toObject();
        delete result.password; // Ensure password is not sent back
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send({ message: "Failed to register user", error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            res.send({ message: "Login Successful", data: user });
        } else {
            res.status(404).send({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).send({ message: "Login failed", error: error.message });
    }
};
    