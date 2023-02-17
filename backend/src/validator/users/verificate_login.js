const {check} = require('express-validator');
const {validateResult} = require('../../helpers/validation/indexValidation');

const verificateLoginUser = [
    check("email").exists().not().isEmpty().isEmail(),
    check("password").exists().not().isEmpty(),
   
    (req, res, next) => {
        validateResult(req, res, next)
    }
];
module.exports = {
    verificateLoginUser
}

