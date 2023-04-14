const { conexion } = require('../../database/config');

function createNewReservationPaymentModel(id_booking, data_payment) {

    const { order_paypal_id, payer_paypal_id, amount
    } = data_payment;

    return new Promise((resolve, reject) => {
        conexion.query(
            `INSERT INTO booking_payments
            (id_booking, order_paypal_id, payer_paypal_id, amount) 
            VALUES ('${id_booking}','${order_paypal_id}',
            '${payer_paypal_id}','${amount}'); `,
            function (error, result, field) {
                if (error)
                    return reject(error);
                return resolve(result);
            })
    })
}

module.exports = {
    createNewReservationPaymentModel
}