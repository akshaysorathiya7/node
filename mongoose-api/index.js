const express = require('express');
const multer = require('multer');
require('./config');
const Product = require('./products');

const app = express();

app.use(express.json());

// app.post('/create', async (req, res) => {
//     let data = new Product(req.body);
//     let result = await data.save();
//     console.log(result);
//     res.send(result);
// });

// app.get('/list', async (req, res) => {
//     let data = await Product.find();
//     res.send(data);
// });

// app.delete('/delete/:_id', async (req, res) => {
//     console.log(req.params);
//     let data = await Product.deleteOne(req.params);
//     res.send(data);
// });

// app.put('/update/:_id', async (req, res) => {
//     console.log(req.params);
//     let data = await Product.updateOne(
//         req.params,
//         { $set: req.body }
//     );
//     res.send(data);
// });

// app.get('/serch/:key', async (req, res) => {
//     // console.log(req.params.key);
//     let data = await Product.find(
//         {
//             "$or": [
//                 { 'model': { $regex: req.params.key } },
//                 { 'brand': { $regex: req.params.key } }
//             ]
//         }
//     )
//     res.send(data);
// })
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads');
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + "-" + ".jpg");
        }
    })
}).single('user_file');

app.post('/upload', upload, (req, res) => {
    res.send("file upload");
})

app.listen(5000);