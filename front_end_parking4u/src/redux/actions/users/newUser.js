import axios from 'axios';
import {
    fetchNewUser,
    fetchNewUserSuccess,
    fetchNewFailure
} from "../../slices/users/newUserSlice";

export const newUser = (data) => async (dispatch) => {

    const dataTest = {
        name: "Pablo",
        last_name: "Hernandez",
        second_last_name: "Ortega",
        email: "josue5@gmail.com",
        password: "123",
        telephone: 77327343
    }

    try {

        dispatch(fetchNewUser());
        const { data } = await axios.post('http://localhost:3000/api/v1/users/new', dataTest);
        dispatch(fetchNewUserSuccess(data.response));

    } catch (error) {

        const { response } = error;

        if (response.status = 409) {
            dispatch(fetchNewFailure("Ususario ya existente"));
            return;
        }

        dispatch(fetchNewFailure(error.response.data.msg));
    }
}