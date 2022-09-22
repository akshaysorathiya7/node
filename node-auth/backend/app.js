const mongoose = require('mongoose');
const express = require('express');
const authRoutes = require('./routes/authRoute')
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
app.use(express.json());

app.use(cors())
app.use(authRoutes);
app.use(cookieParser());

mongoose.connect('mongodb://localhost:27017/user_data');
mongoose.connection.on('error', (err) => {
    console.log('MongoDB connection error:' + err);
});



app.listen(5000);