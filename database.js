const mongoose = require('mongoose');
const database = "SGP";

const dbURI = `mongodb+srv://23ce140:cxFGrQJU8OeTCXVG@cluster0.paezpii.mongodb.net/${database}`; // Change URI as necessary

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
