const { validationResult } = require('express-validator');

const validateResult = (req, res, next) => {
    try {
        validationResult(req).throw()
        return next()
    } catch (error) {
        return res.status(403).json({
            msg: error.array()
        })
    }
}

module.exports = { validateResult }