import axios from 'axios';
import {
    fetchgetAllReservationsSlice,
    fetchgetAllReservationsSliceSuccess,
    fetchgetAllReservationsSliceFailure
} from "../../slices/reservations/indexReservations";


// /get_reservations_by_id_user/:userId
export const getAllReservations = (id_user) => async (dispatch) => {

    try {

        dispatch(fetchgetAllReservationsSlice());

        const {data} = await axios.get(`http://localhost:3000/api/v1/reservations/all`);

        dispatch(fetchgetAllReservationsSliceSuccess(data.response));

    } catch (error) {

        dispatch(fetchgetAllReservationsSliceFailure("ERROR AL OBTENER LAS RESERVACIONES, POR FAVOR INTENTE NUEVAMENTE"));
    }
}