
const { getAllReservationsServices,
    createNewReservationService } = require('../../services/reservations/reservationsServices');

const getAllReservationsController = async (req, res) => {
    try {

        let response = await getAllReservationsServices();

        return res.status(200).json({
            response
        })
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
}

const createNewReservationController = async (req, res) => {

    try {

        const dataBody = req.body;

        let response = await createNewReservationService(dataBody);

        return res.status(200).json({
            response
        })

    } catch (error) {
        return res.statu(500).json({
            error
        })
    }
}

module.exports = {
    getAllReservationsController,
    createNewReservationController
}