const express = require('express');
const cors = require('cors');
require('./db/config')
const User = require('./model/User');
const Jwt = require('jsonwebtoken');
const Jwtkey = 'user_data';

const app = express();

app.use(express.json());
app.use(cors());

app.post('/singup', async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    Jwt.sign({ result }, Jwtkey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
            res.send({ result: 'something went wrong' });
        }
        res.send({ result, auth: token });
    })
});


app.post('/login', async (req, res) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            Jwt.sign({ user }, Jwtkey, { expiresIn: "24h" }, (err, token) => {
                if (err) {
                    res.send({ user: 'something went wrong' });
                }
                res.send({ user, auth: token });
            })
        } else {
            res.send({ user: 'not found' })
        }
    } else {
        res.send({ user: 'not found' })
    }
})

app.listen(5000), () => {
    console.log('server started');
}