import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getIdUser } from "../../helpers/users/getIdUser";
import { logOutDataLocalStorage } from "../../helpers/login/logOutDataLocalStorage";
import { getAllReservationsByIdUser } from "../../redux/actions/reservations/getAllReservationsByIdUser";
import "../../styles/reservations/reservations_list_style.css";
import { Reservation_Content } from "./reservation_content";

export function Reservations() {


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, success, error, userReservations
    } = useSelector((state) => state.reservations.allById);

    useEffect(() => {
        const id_user = getIdUser();
        if (id_user) dispatch(getAllReservationsByIdUser(id_user));
    }, [])

    const logOut = () => {
        logOutDataLocalStorage();
        navigate('/Login');
    }

    const goToViewReservation = () => {
        navigate('/Home');
    }


    return (<>

        <header>
            <div id="rectangulo">
                <button id="logoblanco"></button>
                <button id="login"
                    onClick={() => {
                        logOut();
                    }}
                >Cerrar Sesion</button>

                <button
                    id=''
                    onClick={(() => {
                        goToViewReservation();
                    })}
                >Reservar</button>
            </div>
        </header>

        <h1 id="title_list">MIS RESERVACIONES</h1>

        <div className="container_list">
            {success && userReservations.map((element, index) => {

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

    </>)
}

