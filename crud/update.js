const dbconnect = require('./dbconnect');

const update = async () => {
    const db = await dbconnect();
    const result = await db.updateMany(
        { model: 's10 plus' }, { $set: { price: 000 } }
    );
    if (result.acknowledged) {
        console.log("data updated successfully");
    }
}
module.exports = update;


