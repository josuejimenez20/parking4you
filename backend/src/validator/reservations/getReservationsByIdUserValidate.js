const { check } = require('express-validator');
const { validateResult } = require('../../helpers/validation/indexValidation');

const getReservationsByIdUserValidate = [
    check("userId").exists().not().isEmpty(),

    (req, res, next) => {
        validateResult(req, res, next)
    }
];
module.exports = {
    getReservationsByIdUserValidate
}

