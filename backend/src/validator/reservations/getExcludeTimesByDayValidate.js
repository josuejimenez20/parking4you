const { check } = require('express-validator');
const { validateResult } = require('../../helpers/validation/indexValidation');

const getExcludeTimesByDayValidate = [
    check("date_yyyymmdd").exists().not().isEmpty(),

    (req, res, next) => {
        validateResult(req, res, next)
    }
];
module.exports = {
    getExcludeTimesByDayValidate
}

