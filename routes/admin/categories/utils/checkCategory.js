const {check} = require('express-validator');

const checkCategory = [
    check('category', 'Category is required').not().isEmpty()
];

module.exports = checkCategory;
