
const { getAllReservationsModel,
    createNewReservationModel, getExcludeTimesByDayModels
} = require('../../models/reservations/reservationsModels');

const { verificateStatusSpotServices,
    getRandomIdSpotAvailableServices } = require('../../services/spots/spotsServices');

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

        // Get the first avvaible spot found 
        //and chooose one and this will be "id_random_spot_avaible"

        let id_random_spot_avaible = await getRandomIdSpotAvailableServices();

        let response = {};

        // Add a new property "id_spot" to object "data" with 
        // value of id_spot We found.

        data.id_spot = id_random_spot_avaible[0].id_spot;

        let status_spot = await verificateStatusSpotServices(data.id_spot);

        if (status_spot.length === 0) {
            return [];
        }

        const { insertId } = await createNewReservationModel(data);

        response = {
            insertId
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

module.exports = {
    getAllReservationsServices,
    createNewReservationService,
    getExcludeTimesByDayServices
}