import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Calendar_reservation } from "./Calendar_reservation";
import { getExecludeTimesReservation } from '../../../../redux/actions/reservations/getExecludeTimesReservation';
import { getIdUser } from '../../../../helpers/users/getIdUser';
import { fetchPreReservation } from '../../../../redux/slices/reservations/newReservation';
import { converCalendarDay, convertCalendarData } from '../../../../helpers/reservations/converCalendarData';
import { convertSetExcludeTimes } from '../../../../helpers/reservations/convertSetExcludeTimes';
import "../../../../styles/home/sub_components_styles/reservation_style.css";

export function Form_reservation() {

    // BRING FROM HELPERS FUNCTION
    // SET excludeTimes WITH STORE

    const [excludeTimes, setExcludeTimes] = useState([
        new Date().setHours(9, 0),
        new Date().setHours(10, 0),
        new Date().setHours(13, 0),
    ]);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { loading: loadingExecludeTimes, success: successExecludeTimes,
        error: errorExecludeTimes, execludeTimesData
    } = useSelector((state) => state.reservations.execludeTimes);

    // CONVERT CALENDAR DATA

    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    //SEND TO CALL THE FUNCTION THAT WILL BRING 
    // THE HOURS AND SET IN "EXCLUDETIMES"

    useEffect(() => {

        const day = (converCalendarDay(startDate));

        dispatch(getExecludeTimesReservation(day));
    }, [startDate])

    useEffect(() => {
        // Here We set whit "SETEXECLUDETIMES"
        // with we got in the variable "times" 

        const times = convertSetExcludeTimes(execludeTimesData);

        setExcludeTimes(times);

    }, [execludeTimesData])

    // CREATE A NEW RESERVATION TO BACKEND

    const [dataReservation, setDataReservation] = useState({});

    useEffect(() => {

        const newStartDate = convertCalendarData(startDate);

        const newEndDate = convertCalendarData(endDate);

        const formDataReservation = {
            startDay: newStartDate.dayConvert,
            startHour: newStartDate.hoursConvert,
            endDay: newEndDate.dayConvert,
            endHour: newEndDate.hoursConvert,
        }

        setDataReservation(formDataReservation);
    }, [startDate, endDate])

    const handleNewReservation = (data) => {

        const id_user_localstorage = getIdUser();

        const formData = {
            id_service: data.target.services.value,
            id_user: id_user_localstorage,
            day_start: dataReservation.startDay,
            hour_start: dataReservation.startHour,
            day_end: dataReservation.endDay,
            hour_end: dataReservation.endHour,
        }

        dispatch(fetchPreReservation(formData));

        navigate('Payment_Reservation', { replace: true })
    }

    return (
        <>

            <div id="reservation">
                <Calendar_reservation
                    startDate={startDate}
                    setStartDate={setStartDate}
                    endDate={endDate}
                    setEndDate={setEndDate}
                    excludeTimes={excludeTimes}
                />
                <form className="form_class" id="form_reservation" method="submit"
                    onSubmit={(e) => {
                        e.preventDefault()
                        handleNewReservation(e)
                    }}>
                    <label>Servicios:</label>
                    <select id="services" name="services">
                        <option value="1">Estacionamiento</option>
                        <option value="2">Autolavado</option>
                        <option value="3">Estacionamiento y Autolavado</option>
                    </select>
                    <input type="Submit" name="Submit" className="submit" />
                </form>
            </div>
        </>
    )
}
