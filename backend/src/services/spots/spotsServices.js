
const { verificateStatusSpotModel,
    getIdSpotByNumberSpotModel, getRandomIdSpotAvailableModel
} = require('../../models/spots/spotsModels');

const verificateStatusSpotServices = async (id_spot) => {

    try {
        let response = await verificateStatusSpotModel(id_spot);

        return response;

    } catch (error) {
        return error;
    }
}

const getRandomIdSpotAvailableServices = async (hour_start, hour_end) => {
    try {

        let id_random_spot = getRandomIdSpotAvailableModel(hour_start, hour_end);

        return id_random_spot;

    } catch (error) {
        return error;
    }
}

module.exports = {
    getRandomIdSpotAvailableServices,
    verificateStatusSpotServices,
}
