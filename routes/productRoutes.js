const express = require('express');
const router = express.Router();
const { addProduct, getProductsByCategory , deleteData} = require('../controllers/productController');

router.post('/add-data', addProduct);
router.get('/get-data', getProductsByCategory);
router.delete('/delete-data',deleteData);

module.exports = router;
