const {check} = require('express-validator');
const {validateResult} = require('../../helpers/validation/indexValidation');

const newUserValidate = [
    check("name").exists().not().isEmpty(),
    check("last_name").exists().not().isEmpty(),
    check("second_last_name").exists().not().isEmpty(),
    check("email").exists().not().isEmpty().isEmail(),
    check("password").exists().not().isEmpty(),
    check("telephone").exists().not().isEmpty(),
    // telephone with varchar or int?
    // check("telephone").exists().not().isEmpty().isNumeric(),

    (req, res, next) => {
        validateResult(req, res, next)
    }
];
module.exports = {
    newUserValidate
}

