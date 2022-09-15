const dbconnect = require('./dbconnect');

const deletedata = async () => {
    const db = await dbconnect();
    const result = await db.deleteMany(
        { model: 's10 plus' }
    );
    if (result.acknowledged) {
        console.log("data deleted successfully");
    }
}
module.exports = deletedata;
