const { Router } = require('express');

const { createNewReservationController,
    getAllReservationsController, getExcludeTimesByDayControllers,
    getReservationsByIdUserControllers
} = require('../../controllers/reservations/reservationsControllers');

const { newReservationValidate } = require('../../validator/reservations/newReservationValidate');
const { getExcludeTimesByDayValidate } = require('../../validator/reservations/getExcludeTimesByDayValidate');
const { getReservationsByIdUserValidate } = require('../../validator/reservations/getReservationsByIdUserValidate');

const router = Router();

router.get('/all', getAllReservationsController);

router.post('/new', newReservationValidate, createNewReservationController);

router.get('/get_reservations_by_id_user/:userId', getReservationsByIdUserValidate, getReservationsByIdUserControllers);

router.get('/excludeTimesByDay', getExcludeTimesByDayValidate, getExcludeTimesByDayControllers);


module.exports = router;