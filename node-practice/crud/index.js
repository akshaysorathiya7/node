const dbconnect = require('./dbconnect');
const insert = require('./insert');
const update = require('./update');
const deletedata = require('./delete');




//read data
// dbconnect().then((res) => {
//     res.find({ brand:'samsung'}).toArray().then((data) => {
//         console.log(data);
//     });
// })

//get data with async await function
const main = async () => {
    let data = await dbconnect();
    data = await data.find().toArray();
    console.warn(data);
}
main();
// insert();
// update();
deletedata();
