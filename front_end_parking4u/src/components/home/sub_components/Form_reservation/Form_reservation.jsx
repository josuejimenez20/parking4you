import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Chance } from "chance";
import { Calendar_reservation } from "./Calendar_reservation";
import { getIdUser } from '../../../../helpers/users/getIdUser';
import { getNameService } from '../../../../helpers/reservations/getNameService';
import { fetchPreReservation } from '../../../../redux/slices/reservations/newReservation';
import { convertCalendarData } from '../../../../helpers/reservations/converCalendarData';
import { changeToColors } from '../../../../redux/slices/reservations/colorProcessReservations';
import { getNowHour } from '../../../../helpers/reservations/getNowHour';
import "../../../../styles/home/sub_components_styles/form_reservation_style.css";

export function Form_reservation() {

    const [today, setToday] = useState(new Date());
    const [hoursToday, setHoursToday] = useState();

    useEffect(() => {
        let now = today.toLocaleString();
        const nowHour = getNowHour(now);

        setHoursToday(nowHour);
    }, [])


    const preHoursDisable= [
        new Date().setHours(0, 0),
        new Date().setHours(1, 0),
        new Date().setHours(2, 0),
        new Date().setHours(3, 0),
        new Date().setHours(4, 0),
        new Date().setHours(5, 0),
        new Date().setHours(6, 0),
        new Date().setHours(22, 0),
        new Date().setHours(23, 0),
        new Date().setHours(24, 0),
    ];

    const excludeTimes = preHoursDisable.concat(hoursToday);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const chance = Chance();

    // const { loading: loadingExecludeTimes, success: successExecludeTimes,
    //     error: errorExecludeTimes, execludeTimesData
    // } = useSelector((state) => state.reservations.execludeTimes);

    // CONVERT CALENDAR DATA

    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    //SEND TO CALL THE FUNCTION THAT WILL BRING 
    // THE HOURS AND SET IN "EXCLUDETIMES"

    // useEffect(() => {

    //     const day = (converCalendarDay(startDate));

    //     dispatch(getExecludeTimesReservation(day));
    // }, [startDate])

    // useEffect(() => {
    //     // Here We set whit "SETEXECLUDETIMES"
    //     // with we got in the variable "times" 

    //     const times = convertSetExcludeTimes(execludeTimesData);

    //     setExcludeTimes(times);

    // }, [execludeTimesData])

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

        const id_service = data.target.services.value;
        const service_name = getNameService(id_service);
        const id_user_localstorage = getIdUser();
        const randomCode = chance.string(
            { length: 5, pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' });

        const formData = {
            id_service: data.target.services.value,
            service_name: service_name,
            id_user: id_user_localstorage,
            day_start: dataReservation.startDay,
            hour_start: dataReservation.startHour,
            day_end: dataReservation.endDay,
            hour_end: dataReservation.endHour,
            reservation_code: randomCode
        }

        dispatch(fetchPreReservation(formData));

        dispatch(changeToColors({
            login: true,
            bookButton: true,
            data: true,
            end: false
        }))

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
                    <br />
                    <h2 id='title_service'>Servicios: </h2>
                    <br />
                    <select id="services" name="services">
                        <option value="1">Estacionamiento</option>
                        <option value="2">Estacionamiento y Autolavado</option>
                    </select>
                    <br />
                    <br />
                    <input type="Submit" name="Submit" className="submit_reservaiton" />
                </form>
            </div>
        </>
    )
}
