
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

const getRandomIdSpotAvailableServices = async () => {
    try {

        let id_random_spot = getRandomIdSpotAvailableModel();

        return id_random_spot;

    } catch (error) {
        return error;
    }
}

module.exports = {
    getRandomIdSpotAvailableServices,
    verificateStatusSpotServices,
}
