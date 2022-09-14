const express = require('express');
const dbconnect = require('./dbconnect');
const mongodb = require('mongodb');
const app = express();

app.use(express.json());

//display
app.get('/', async (req, res) => {
    let result = await dbconnect();
    result = await result.find().toArray();
    console.log(result);
    res.send(result)

});

//insert
app.post('/', async (req, res) => {
    let result = await dbconnect();
    let data = await result.insert(req.body);

    res.send(data)
});

//update
app.put('/:model', async (req, res) => {
    let result = await dbconnect();
    let data = await result.update(
        { name: req.params.name }, { $set: req.body }
    );
    res.send(data)
});

//delete
app.delete('/:id', async (req, res) => {
    let result = await dbconnect();
    let data = await result.deleteMany(
        { _id: new mongodb.ObjectId(req.params.id) }
    );
    res.send(data)
});

app.listen(5000)