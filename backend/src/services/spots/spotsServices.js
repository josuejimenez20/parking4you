
const { verificateStatusSpotModel,
    getIdSpotByNumberSpotModel,
    getFirstSpotAvaibleModel } = require('../../models/spots/spotsModels');

const getIdSpotByNumberSpotServices = async (number_spot) => {

    try {
        let response = await getIdSpotByNumberSpotModel(number_spot);

        return response;

    } catch (error) {
        return error;
    }
}

const verificateStatusSpotServices = async (id_spot) => {

    try {
        let response = await verificateStatusSpotModel(id_spot);

        return response;

    } catch (error) {
        return error;
    }
}

module.exports = {
    getIdSpotByNumberSpotServices,
    verificateStatusSpotServices,
}
