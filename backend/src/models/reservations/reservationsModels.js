const { conexion } = require('../../database/config');

const { changeStateSpotModel } = require('../../models/spots/spotsModels');

// TO GET ONLY THE NUMBERS OF REGISTERS YOU WANT

// SELECT * FROM bookings
// LIMIT 2 OFFSET 0; -- Devuelve las primeras 2 filas

// SELECT * FROM bookings
// LIMIT 2 OFFSET 2; -- Devuelve las siguientes 2 filas


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

function createNewReservationModel(data) {
    const {
        id_service, id_user, day_start, day_end,
        id_spot, hour_start, hour_end } = data;

    // We removed the availability of the spot.
    changeStateSpotModel(id_spot, false);

    //     START TRANSACTION;

    // -- Seleccionar el registro a actualizar y bloquearlo para lectura y escritura
    // SELECT * FROM spots sp WHERE sp.id_spot = '1' FOR UPDATE;

    // -- Realizar las operaciones necesarias dentro de la transacción
    // UPDATE spots sp 
    // SET sp.state = '1' 
    // WHERE sp.id_spot = '1';

    // -- Confirmar las operaciones con COMMIT
    // COMMIT;

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
    createNewReservationModel,
    getExcludeTimesByDayModels,
    deleteReservationByIdModel
}