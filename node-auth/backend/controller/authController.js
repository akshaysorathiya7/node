const User = require('../model/Users');
const jwt = require('jsonwebtoken');

//handles errors
const errorHandler = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };

    if (err.message == 'Email incorrect') {
        errors.email = 'that Email is not registered';
    }


    if (err.message == 'Password incorrect') {
        errors.password = 'that Password is not registered';
    }

    if (err.code == 11000) {
        errors.email = 'Email already exists';
        return errors;
    }

    //validate errors
    if (err.message.includes('users validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
}
const maxage = 3 * 24 * 60 * 60;

const createToken = (id) => {
    return jwt.sign({ id }, 'secret', {
        expiresIn: maxage,
    });
}
module.exports.signup_get = (req, res) => {
    res.send('sign up');
}
module.exports.login_get = (req, res) => {
    res.send('login');
}
module.exports.signup_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.create({ email, password });
        const token = createToken(user._id);
        // res.cookie('jwt', token, { httpOnly: true, maxage: maxage * 1000 })
        res.status(201).json({ user, token });
        console.log(token);
    } catch (err) {
        const errors = errorHandler(err);
        res.status(400).json({ errors });
    }

}
module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.status(200).json({ user, token })
    } catch (err) {
        const errors = errorHandler(err);
        res.status(400).json({ errors })
    }
}