
const { getAllReservationsModel,
    createNewReservationModel } = require('../../models/reservations/reservationsModels');

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

        let { insertId } = await createNewReservationModel(data);

        const response = {
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