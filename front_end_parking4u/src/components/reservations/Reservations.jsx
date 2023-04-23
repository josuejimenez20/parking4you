import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Reservation_card } from "../../components/common/cards/Reservation_card";
import { getIdUser } from "../../helpers/users/getIdUser";
import { getAllReservationsByIdUser } from "../../redux/actions/reservations/getAllReservationsByIdUser";

export function Reservations() {


    const dispatch = useDispatch();
    const { loading, success, error, userReservations
    } = useSelector((state) => state.reservations.allById);

    useEffect(() => {
        const id_user = getIdUser();
        if (id_user) dispatch(getAllReservationsByIdUser(id_user));
    }, [])


    return (<>
        {/* {userReservations.forEach(element => {
            return (<Reservation_card 
            
            />)
        })} */}
    </>)
}