
const { getAllReservationsServices,
    createNewReservationService, getExcludeTimesByDayServices,
    getReservationsByIdUserServices
} = require('../../services/reservations/reservationsServices');

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

        if (response.length === 0)
            return res.status(409).json({
                msg: "Hubo un problema la agregar el lugar, intentar nuevamente por favor."
            })

        return res.status(201).json({
            response
        })

    } catch (error) {
        return res.statu(500).json({
            error
        })
    }
}

const getExcludeTimesByDayControllers = async (req, res) => {

    try {
        const day = req.query.date_yyyymmdd;

        let response = await getExcludeTimesByDayServices(day);

        return res.status(200).json({
            response
        });

    } catch (error) {
        return error;
    }
}

const getReservationsByIdUserControllers = async (req, res) => {

    try {

        let id_user = req.params.userId;

        let response = await getReservationsByIdUserServices(id_user);

        return res.status(200).json({
            response
        })
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllReservationsController,
    createNewReservationController,
    getExcludeTimesByDayControllers,
    getReservationsByIdUserControllers
}