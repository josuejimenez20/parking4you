const {
    createNewUserServices,
    verificateLoginUserServices } = require('../../services/usersServices');


const createNewUserController = async (req, res) => {

    let data = req.body;

    try {

        let response = await createNewUserServices(data);

        // If in services We found the user, the response
        // will empty
        if (response.length === 0) {
            return res.status(409).json({
                msg: "existing user"
            })
        }

        //If in services We DIDN'T found the user, the 
        // response wont empty and We response SOME data
        return res.status(200).json({
            response
        })

    } catch (error) {
        return res.status(500).json({
            error
        })
    }
}

const verificateLoginUserControllers = async (req, res) => {

    const data = req.body;

    let response = await verificateLoginUserServices(data);

    if(response.length === 0) {
        return res.status(404).json({
            msg: "user didn't found",
            data
        })
    }

    return res.status(200).json({
        response
    })
}


module.exports = {
    createNewUserController,
    verificateLoginUserControllers
};