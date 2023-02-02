// const { conexion } = require('../../database/config');


function getInformationUserModels() {
    // const { id_user, email, password } = data;

    // return new Promise((resolve, reject) => {
    //     conexion.query(
    //         `SELECT * FROM users u 
    //         INNER JOIN directions ud 
    //         ON u.id_user_encrypted = ud.id_user_encrypted
    //         WHERE u.email = '${email}' AND u.password = '${password}'`,
    //         function (error, result, field) {
    //             if (error)
    //                 return reject(error);
    //             return resolve(result);
    //         })
    // })

    return "Hello from users models"
}


module.exports = {
    getInformationUserModels
}
