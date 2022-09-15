const dbconnect = require('./dbconnect');

const insert = async () => {
    const db = await dbconnect();
    const result = await db.insertMany(
        [
            { model: 's10', brand: 'intex', price: 300, category: 'mobile' },
            { model: 'a10', brand: 'lava', price: 500, category: 'mobile' },
            { model: 'f10', brand: 'oppo', price: 8000, category: 'mobile' }
        ]
    );
    if (result.acknowledged) {
        console.log("data inserted");
    }
}
module.exports = insert;


