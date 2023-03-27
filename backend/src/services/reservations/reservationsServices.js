
const { getAllReservationsModel,
    createNewReservationModel } = require('../../models/reservations/reservationsModels');

const { getIdSpotByNumberSpotServices,
    verificateStatusSpotServices } = require('../../services/spots/spotsServices');

const getAllReservationsServices = async () => {

    try {
        let response = await getAllReservationsModel();
        return response;
    } catch (error) {
        return error;
    }
}

const createNewReservationService = async (data) => {

    try {

        let response = {};

        let id_spot_db = await getIdSpotByNumberSpotServices(data.number_spot);

        // Add a new property "id_spot" to object "data" with 
        // value of id_spot We found.

        data.id_spot = id_spot_db[0].id_spot;

        let status_spot = await verificateStatusSpotServices(data.id_spot);

        if (status_spot.length === 0) {
            return [];
        }

        const {insertId} = await createNewReservationModel(data);

         response = {
            insertId
        }

        return response;

    } catch (error) {
        return error
    }
}

module.exports = {
    getAllReservationsServices,
    createNewReservationService
}