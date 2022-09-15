const mongoose = require('mongoose');
const productschema = new mongoose.Schema({
    model: String,
    brand: String,
    price: Number,
    category: String,
});

module.exports = mongoose.model('products', productschema);
