const {
    getInformationUserServices
} = require('../../services/usersServices');


const getInformationUserController = async (req, res) => {

    try {

        let response = await getInformationUserServices();

        return res.status(200).json({
            response
        })

    } catch (error) {
        return res.status(500).json({
            msg: 'Could not get user informacion'
        })
    }
}


module.exports = {
    getInformationUserController,
};