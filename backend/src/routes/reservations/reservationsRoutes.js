const { Router } = require('express');

const { createNewReservationController,
    getAllReservationsController } = require('../../controllers/reservations/reservationsControllers');

const { newReservationValidate } = require('../../validator/reservations/newReservationValidate');

const router = Router();

router.get('/all', getAllReservationsController);

router.post('/new', newReservationValidate, createNewReservationController);


module.exports = router;