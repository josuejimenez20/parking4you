const { conexion } = require('../../database/config');

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
        hour_start, hour_end } = data;

    return new Promise((resolve, reject) => {
        conexion.query(
            `INSERT INTO bookings
            (id_services, id_user, day_start, day_end, hour_start, 
            hour_end) VALUES ('${id_service}', '${id_user}', 
            '${day_start}', '${day_end}', '${hour_start}', '${hour_end}');`,
            function (error, result, field) {
                if (error)
                    return reject(error);
                return resolve(result);
            })
    })
}

module.exports = {
    getAllReservationsModel,
    createNewReservationModel
}