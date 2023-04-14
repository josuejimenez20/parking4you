import axios from 'axios';
import {
    fetchNewUser,
    fetchNewUserSuccess,
    fetchNewFailure
} from "../../slices/users/newUserSlice";

export const newUser = (dataForm) => async (dispatch) => {

    try {

        dispatch(fetchNewUser());
        
        const { data } = await axios.post('http://localhost:3000/api/v1/users/new', dataForm);

        dispatch(fetchNewUserSuccess(data.response));

    } catch (error) {

        const { response } = error;

        if (response.status = 409) {
            dispatch(fetchNewFailure("Ususario ya existente"));
            return;
        }
        
        dispatch(fetchNewFailure("Error al registrarse"));
    }
}