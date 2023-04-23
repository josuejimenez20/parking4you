
const { getAllReservationsModel,
    createNewReservationModel, getExcludeTimesByDayModels,
    deleteReservationByIdModel, getReservationsByIdUserModels
} = require('../../models/reservations/reservationsModels');

const { verificateStatusSpotServices,
    getRandomIdSpotAvailableServices } = require('../../services/spots/spotsServices');

const { createNewReservationPaymentService }
    = require('../../services/reservation_payments/reservation_paymentServices');

const getAllReservationsServices = async () => {

    try {
        let response = await getAllReservationsModel();
        return response;
    } catch (error) {
        return error;
    }
}

const getReservationsByIdUserServices = async (userId) => {

    try {

        let response = await getReservationsByIdUserModels(userId);
        
        return response;

    } catch (error) {
        return error;
    }
}

const createNewReservationService = async (data) => {

    try {

        // Get the first avvaible spot found 
        //and chooose one and this will be "id_random_spot_avaible"

        let id_random_spot_avaible = await getRandomIdSpotAvailableServices();

        if (id_random_spot_avaible.length === 0) {
            return [];
        }

        let response = {};

        // Add a new property "id_spot" to object "data" with 
        // value of id_spot We found.

        data.id_spot = id_random_spot_avaible[0].id_spot;

        let status_spot = await verificateStatusSpotServices(data.id_spot);

        if (status_spot.length === 0) {
            return [];
        }

        const { insertId } = await createNewReservationModel(data);

        // SENT booking's id that We got from 
        // "responseCreateNewReservation" and the
        // paypal payment data

        // HERE WE SET THE NEW booking_payment

        const responseCreateNewReservationPayment = await createNewReservationPaymentService(insertId, data);

        console.log(responseCreateNewReservationPayment);

        response = {
            msg: "new reservation created"
        }

        return response;

    } catch (error) {

        return error
    }
}

const getExcludeTimesByDayServices = async (day) => {

    try {

        let response = getExcludeTimesByDayModels(day);

        return response;
    } catch (error) {
        return error;
    }
}

const deleteReservationByIdServices = async (id_booking) => {

    try {

        let reponse = await deleteReservationByIdModel(id_booking);

    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllReservationsServices,
    getReservationsByIdUserServices,
    createNewReservationService,
    getExcludeTimesByDayServices,
    deleteReservationByIdServices
}