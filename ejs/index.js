const express = require('express');
const path = require('path');

const app = express();
const publicpath = path.join(__dirname, 'public');

// app.use(express.static(publicpath));
app.set('view engine', 'ejs');

app.get('', (req, res) => {
    res.sendFile(`${publicpath}/index.html`);
});

app.get('/about', (req, res) => {
    res.sendFile(`${publicpath}/about.html`);
});

app.get('/profile', (req, res) => {
    const user = {
        name: 'asdfg',
        email: 'asdfg@as.com',
        city: 'ahmedabad',
        skills: ['php', 'javascript', 'java', 'c#', 'python']
    }
    res.render('profile', { user });
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('*', (req, res) => {
    res.sendFile(`${publicpath}/404.html`);
});


app.listen(5000);