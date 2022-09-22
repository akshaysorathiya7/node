const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./routes/authRoutes')

const app = express();

app.use(express.json());
app.use(cors());

const url = 'mongodb://localhost:27017/user_data';
mongoose.connect(url, { userNewUrlParser: true, userUndifiesTopology: true, userCreateIndex: true, userDeleteIndex: true })
    .then((result) => app.listen(5000))
    .catch((err) => console.log(err));

app.get('/', (req, res) => {

})

app.use(authRouter)