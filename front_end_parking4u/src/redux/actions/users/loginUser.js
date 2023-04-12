import axios from 'axios';
import {
    fetchLoginUser,
    fetchLoginUserSuccess,
    fetchLoginFailure
} from "../../slices/users/loginUserSlice";

//http://localhost:3000/api/v1/users/login_verificate

export const loginUser = (dataForm) => async (dispatch) => {

    try {

        dispatch(fetchLoginUser());

        const {data} = await axios.post('http://localhost:3000/api/v1/users/login_verificate', dataForm);

        dispatch(fetchLoginUserSuccess(data.response));

    } catch (error) {
        
        if(error.response.status == 404){
            return dispatch(fetchLoginFailure("Usuario no encontrado"))
        }
        
        dispatch(fetchLoginFailure(error));

    }
}