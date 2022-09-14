const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-comm');

const productschema = new mongoose.Schema({
    model: String,
    brand: String,
    price: Number,
    category: String,
});
const saveinDB = async () => {
    const product = mongoose.model('products', productschema);
    let data = new product({
        model: 'note pr',
        brand: 'samsung',
        price: 100,
        category: 'mobile',
    });
    const result = await data.save();
    console.log(result);
}
// saveinDB();

const updateinDB = async () => {
    const product = mongoose.model('products', productschema);
    let data = await product.updateOne(
        { model: 'note pro' },
        {
            $set:
            {
                model: 'note pr'
            }
        }
    )
    console.log(data);
}

// updateinDB();

const deleteinDB = async () => {
    const product = mongoose.model('products', productschema);
    let data = await product.deleteOne({ model: 'note pro' });
    console.log(data);
}
deleteinDB();

const findinDB = async () => {
    const product = mongoose.model('products', productschema);
    let data = await product.find({ price: 100 });
    console.log(data);
}
findinDB();