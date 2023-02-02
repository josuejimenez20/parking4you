
const {
    getInformationUserModels
} = require("../models/users/usersModels");

const getInformationUserServices = async () => {
    try {
        let response = await getInformationUserModels();
        return response
    } catch (error) {
        return error;
    }
}


module.exports = {
    getInformationUserServices
}