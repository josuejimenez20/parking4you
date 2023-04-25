import axios from 'axios';
import {
    fetchgetReservationsByIdUser,
    fetchgetReservationsByIdUserSuccess,
    fetchgetReservationsByIdUserFailure
} from "../../slices/reservations/indexReservations";


// /get_reservations_by_id_user/:userId
export const getAllReservationsByIdUser = (id_user) => async (dispatch) => {

    try {

        dispatch(fetchgetReservationsByIdUser());

        const {data} = await axios.get(`http://localhost:3000/api/v1/reservations/get_reservations_by_id_user/${id_user}`);

        dispatch(fetchgetReservationsByIdUserSuccess(data.response));

    } catch (error) {

        dispatch(fetchgetReservationsByIdUserFailure("ERROR AL OBTENER LAS RESERVACIONES, POR FAVOR INTENTE NUEVAMENTE"));
    }
}