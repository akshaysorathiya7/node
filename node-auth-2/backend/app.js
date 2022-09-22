const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
const cookieParser = require('cookie-parser');


const app = express();


app.use(cors())
app.use(authRoutes);
app.use(cookieParser());


// database connection
const dbURI = 'mongodb://localhost:27017/user_data';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then((result) => app.listen(5000) ,'connected')
  .catch((err) => console.log(err));


app.listen(6000);