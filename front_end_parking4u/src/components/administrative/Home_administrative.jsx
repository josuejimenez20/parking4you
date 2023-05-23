import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getAllReservations } from '../../redux/actions/reservations/getAllREservations';
import { Reservation_Content } from '../reservations/reservation_content';
import { logOutAdministrativeDataLocalStorage } from '../../helpers/login/logOutDataLocalStorage';
import "../../styles/reservations/reservations_list_style.css";
import LogoBlanco from "../../assets/LogoBlanco.png";

export const Home_administrative = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, success,
        error, allReservations
    } = useSelector((state) => state.reservations.all);

    const logOut = () => {
        logOutAdministrativeDataLocalStorage(navigate('/Login')); 
    }

    useEffect(() => {
        dispatch(getAllReservations());
    }, [])

    return (
        <>
            <header>
                <div id="rectangulo">
                    <img src={LogoBlanco} alt="" />
                    <button id="login"
                        onClick={() => {
                            logOut();
                        }}
                    >Cerrar Sesion</button>
                </div>
            </header>
            <div className="container_list">

                {success && allReservations.map((element, index) => {

                    const user_name = element.name + " " + element.last_name + " " + element.second_last_name;

                    return <Reservation_Content
                        key={index}
                        code={element.reservation_code}
                        date_end={element.day_end}
                        date_start={element.day_start}
                        hour_end={element.hour_end}
                        hour_start={element.hour_start}
                        service={element.service_name}
                        user_name={user_name}
                    />
                })
                }
            </div>
        </>
    )
}
