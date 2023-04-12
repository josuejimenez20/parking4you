const { Router } = require('express');

const { createNewReservationController,
    getAllReservationsController, getExcludeTimesByDayControllers
} = require('../../controllers/reservations/reservationsControllers');

const { newReservationValidate } = require('../../validator/reservations/newReservationValidate');
const { getExcludeTimesByDayValidate } = require('../../validator/reservations/getExcludeTimesByDayValidate');

const router = Router();

router.get('/all', getAllReservationsController);

router.post('/new', newReservationValidate, createNewReservationController);

router.get('/excludeTimesByDay', getExcludeTimesByDayValidate, getExcludeTimesByDayControllers);


module.exports = router;