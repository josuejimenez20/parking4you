const { conexion } = require('../../database/config');


function createNewUserModels(data) {
    const {
        uniqueUserId, name, last_name,
        second_last_name, email, password,
        telephone } = data;

    return new Promise((resolve, reject) => {
        conexion.query(
            `INSERT INTO users(id_user, name, last_name, second_last_name, 
            email, password, telephone) 
            VALUES ('${uniqueUserId}','${name}','${last_name}','${second_last_name}',
            '${email}', '${password}','${telephone}')`,
            function (error, result, field) {
                if (error)
                    return reject(error);
                result.uniqueUserId = uniqueUserId;
                return resolve(result);
            })
    })
}

function verificateCreateNewUserModels(email) {

    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT email 
            FROM users as us 
            WHERE us.email = "${email}" `,
            function (error, result, field) {
                if (error)
                    return reject(error);
                return resolve(result);
            })
    })
}

function verificateLoginUserModels(data) {

    const {email, password} = data;

    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT id_user AS uniqueUserId
            FROM users as us 
            WHERE us.email = "${email}" 
            AND us.password = "${password}" `,
            function (error, result, field) {
                if (error)
                    return reject(error);
                return resolve(result);
            })
    })
}



module.exports = {
    createNewUserModels, 
    verificateCreateNewUserModels,
    verificateLoginUserModels
}
