const {check} = require('express-validator');

const checkLogin = [
    check('email', 'Please enter email').isEmail(),
    check('password', 'Please include a valid password').isLength({min:3})
];

module.exports = checkLogin;
