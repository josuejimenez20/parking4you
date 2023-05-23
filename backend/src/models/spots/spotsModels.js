const { conexion } = require('../../database/config');

function getIdSpotByNumberSpotModel(number_spot) {

    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT id_spot 
            FROM spots 
            WHERE number_spot = "${number_spot}"
            `,
            function (error, result, field) {
                if (error)
                    return reject(error);
                return resolve(result);
            })
    })
}


function verificateStatusSpotModel(id_spot) {

    return new Promise((resolve, reject) => {
        conexion.query(
            `
            SELECT sp.state 
            FROM spots sp 
            WHERE sp.id_spot = "${id_spot}" AND sp.state = "1";    
            `,
            function (error, result, field) {
                if (error)
                    return reject(error);
                return resolve(result);
            })
    })
}
function getRandomIdSpotAvailableModel(hour_start, hour_end) {

    //     SELECT sp.id_spot FROM spots sp
    // WHERE sp.id_spot NOT IN(
    //     SELECT id_spot FROM bookings
    // WHERE(hour_start BETWEEN '10:00' AND '13:00') OR(hour_end BETWEEN '10:00' AND '13:00')
    // GROUP BY id_spot
    // ) LIMIT 1;

    // SELECT sp.id_spot 
    //         FROM spots sp 
    //         WHERE sp.state = "1" 
    //         LIMIT 1; 

    return new Promise((resolve, reject) => {
        conexion.query(
            `
        SELECT sp.id_spot FROM spots sp
        WHERE sp.id_spot NOT IN(
        SELECT id_spot FROM bookings
        WHERE(hour_start BETWEEN '${hour_start}' AND '${hour_end}') 
        OR (hour_end BETWEEN '${hour_start}' AND '${hour_end}')
            GROUP BY id_spot
        ) LIMIT 1;
               
            `,
            function (error, result, field) {
                if (error)
                    return reject(error);
                return resolve(result);
            })
    })
}

function changeStateSpotModel(id_spot, stateChange) {

    const status = stateChange ? 1 : 0;

    return new Promise((resolve, reject) => {
        conexion.query(
            `
            UPDATE spots AS sp
            SET sp.state = '${status}'
            WHERE sp.id_spot = '${id_spot}'    
            `,
            function (error, result, field) {
                if (error)
                    return reject(error);
                return resolve(result);
            })
    })
}

function verificateStatusSpotModel(id_spot) {

    return new Promise((resolve, reject) => {
        conexion.query(
            `
            SELECT sp.state 
            FROM spots sp 
            WHERE sp.id_spot = "${id_spot}" AND sp.state = "1";    
            `,
            function (error, result, field) {
                if (error)
                    return reject(error);
                return resolve(result);
            })
    })
}




module.exports = {
    getIdSpotByNumberSpotModel,
    getRandomIdSpotAvailableModel,
    changeStateSpotModel,
    verificateStatusSpotModel,
}