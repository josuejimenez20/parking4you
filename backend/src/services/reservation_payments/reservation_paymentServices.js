

const { createNewReservationPaymentModel }
    = require("../../models/reservation_payments/reservation_paymentsModels");

const { changeStateSpotModel } = require("../../models/spots/spotsModels");

const { deleteReservationByIdModel } = require("../../models/reservations/reservationsModels");

// We just send to created the booking
// after that We'll create the newReservationPayment
// if there is an error, We'll delete the booking register

const createNewReservationPaymentService = async (id_booking, data_payment) => {

    const { id_spot } = data_payment;

    try {

        let response = await createNewReservationPaymentModel(id_booking, data_payment);

        return response;

    } catch (error) {

        // May be here could be the error
        // What Will happend if We remove
        // the functions "deleteReservationByIdModel"
        // "changeStateSpotModel"

        await deleteReservationByIdModel(id_booking);

        // Set the status spot
        await changeStateSpotModel(id_spot, true);

        return error;
    }
}


module.exports = {
    createNewReservationPaymentService
}