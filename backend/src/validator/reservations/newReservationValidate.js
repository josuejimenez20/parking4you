const { check } = require('express-validator');
const { validateResult } = require('../../helpers/validation/indexValidation');

const newReservationValidate = [
    check("id_service").exists().not().isEmpty(),
    check("id_user").exists().not().isEmpty(),
    check("number_spot").exists().not().isEmpty().isNumeric(),
    check("day_start").exists().not().isEmpty(),
    check("day_end").exists().not().isEmpty(),
    check("hour_start").exists().not().isEmpty(),
    check("hour_end").exists().not().isEmpty(),

    (req, res, next) => {
        validateResult(req, res, next)
    }
];
module.exports = {
    newReservationValidate
}

