const uuid = require('uuid');

const {
    createNewUserModels,
    verificateCreateNewUserModels,
    verificateLoginUserModels } = require("../models/users/usersModels");

const createNewUserServices = async (data) => {

    const { email } = data;

    try {

        const uniqueUserId = uuid.v4();

        data.uniqueUserId = uniqueUserId;

        // We verificate that not exist a user with the same
        //email
        let verificatExistence = await verificateCreateNewUserModels(email);

        // If not exist, We'll create a new user
        if (verificatExistence.length === 0) {
            return response = await createNewUserModels(data);
        }

        return []
    } catch (error) {
        return error;
    }
}

const verificateLoginUserServices = async (data) => {

    try {
        let response = await verificateLoginUserModels(data);

        if(response.length > 0) {
            return response;
        } 

        return [];

    } catch (error) {
        return error
    }
}


module.exports = {
    createNewUserServices,
    verificateLoginUserServices
}