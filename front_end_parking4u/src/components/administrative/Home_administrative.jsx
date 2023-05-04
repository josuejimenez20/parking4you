import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getAllReservations } from '../../redux/actions/reservations/getAllREservations';

export const Home_administrative = () => {

    const dispatch = useDispatch();

    const { loading, success,
        error, allReservations
    } = useSelector((state) => state.reservations.all);

    useEffect(() => {
        dispatch(getAllReservations());
    }, [])

    useEffect(() => {
        console.log(allReservations);
    }, [allReservations])


    return (
        <>
            <div>Home_administrative</div>
        </>
    )
}
