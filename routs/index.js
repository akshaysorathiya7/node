const express = require('express');
const app = express();
const reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send('Please provide your age')
    } else if (req.query.age < 18) {
        res.send('You are under age')
    } else {
        next();
    }
}
// app.use(reqFilter);

app.get('/', (req, res) => {
    res.send('welcome to HomePage');
});

app.get('/users', (req, res) => {
    res.send('Welcome to user page')
});

app.get('/about', reqFilter, (res, req) => {
    res.send('Welcome to Users page')
})

app.listen(5000);