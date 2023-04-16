const {
    createNewUserServices,
    verificateLoginUserServices } = require('../../services/users/usersServices');


const createNewUserController = async (req, res) => {

    let data = req.body;

    const { name, last_name, second_last_name
    } = req.body;

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

        response.name = name;
        response.last_name = last_name;
        response.second_last_name = second_last_name;

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

    data.name = response[0].name;
    data.last_name = response[0].last_name;
    data.second_last_name = response[0].second_last_name;

    console.log(data);

    if (response.length === 0) {
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