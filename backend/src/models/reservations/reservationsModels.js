const { conexion } = require('../../database/config');

const { changeStateSpotModel } = require('../../models/spots/spotsModels');

function getAllReservationsModel() {

    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT * FROM bookings;`,
            function (error, result, field) {
                if (error)
                    return reject(error);
                return resolve(result);
            })
    })
}

function getReservationsByIdUserModels(userId) {

    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT 
            bks.day_start, bks.day_end, bks.hour_start, bks.hour_end,
            us.name, us.last_name, us.second_last_name, us.telephone,
            bksp.amount,
            sp.number_spot,
            sv.service_name

            FROM bookings bks 

            INNER JOIN users us
            ON bks.id_user = us.id_user
            INNER JOIN spots sp 
            ON bks.id_spot = sp.id_spot
            INNER JOIN booking_payments bksp
            ON bks.id_booking = bksp.id_booking
            INNER JOIN services sv
            ON bks.id_services = sv.id_service
            WHERE us.id_user = "${userId}";
            `,
            function (error, result, field) {
                if (error)
                    return reject(error);
                return resolve(result);
            })
    })
}

function createNewReservationModel(data) {
    const {
        id_service, id_user, day_start, day_end,
        id_spot, hour_start, hour_end } = data;

    // We removed the availability of the spot.
    changeStateSpotModel(id_spot, false);

    return new Promise((resolve, reject) => {
        conexion.query(
            `INSERT INTO bookings
            (id_services, id_user, id_spot, day_start, day_end, hour_start, 
            hour_end) VALUES ('${id_service}', '${id_user}', '${id_spot}', 
            '${day_start}', '${day_end}', '${hour_start}', '${hour_end}');`,
            function (error, result, field) {
                if (error)
                    return reject(error);
                return resolve(result);
            })
    })
}

function getExcludeTimesByDayModels(day) {

    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT bk.hour_start, bk.hour_end 
            FROM bookings bk 
            WHERE bk.day_start = "${day}";`,
            function (error, result, field) {
                if (error)
                    return reject(error);
                return resolve(result);
            })
    })
}


function deleteReservationByIdModel(id_booking) {

    return new Promise((resolve, reject) => {
        conexion.query(
            `DELETE FROM bookings bk 
            WHERE bk.id_booking = "${id_booking}";`,
            function (error, result, field) {
                if (error)
                    return reject(error);
                return resolve(result);
            })
    })
}

module.exports = {
    getAllReservationsModel,
    getReservationsByIdUserModels,
    createNewReservationModel,
    getExcludeTimesByDayModels,
    deleteReservationByIdModel
}