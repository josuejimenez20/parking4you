import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HomeRoutes } from '../../routes/home/HomeRoutes';
import { logOutDataLocalStorage } from '../../helpers/login/logOutDataLocalStorage';
import { changeToColors } from '../../redux/slices/reservations/colorProcessReservations';
import "../../styles/home/main_page_style.css";



export function Home() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { colorsChange: colorsChangeState } = useSelector((state) => state.reservations.color);

    const [colorsChange, setColorsChange] = useState({
        colorsChangeState
    });

    const changeViewToRegister = () => {

        dispatch(changeToColors(
            {
                login: true,
                bookButton: true,
                data: false,
                end: false
            }
        ))
        navigate('Reservation');
    }

    useEffect(() => {
        setColorsChange(colorsChangeState)
    }, [colorsChangeState])

    const logOut = () => {
        logOutDataLocalStorage();
        navigate('/Login');
    }

    const goToViewMyReservations = () => {
        navigate('/Reservations');
    }

    return (
        <>
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
                            goToViewMyReservations();
                        })}
                    >Mis Reservaciones</button>
                </div>
            </header>
            <div id="weAre">
                <div id="rectangulo1">
                    <div id="logonegro"></div>
                    <div id="cosanaranja"></div>
                    <div id="cosanegra"></div>
                    <div id="linea"></div>
                    <div id="slogan">Para que esperarlo si puedes reservarlo</div>
                </div>

            </div>
            <div id="steps">
                <div id="rectangulo2"></div>
                <div id="glass">

                </div>
                <button id="reserva"
                    onClick={() => {
                        changeViewToRegister();
                    }}
                > Reservar </button>
                <div id="clickalbot" style={{ color: colorsChange.bookButton ? "white" : "" }}>Click al boton de reserva</div>
                <div id="disfrutatu" style={{ color: colorsChange.end ? "white" : "" }}>Disfruta tu lugar</div>
                <div id="ingresatus" style={{ color: colorsChange.data ? "white" : "" }}>Ingresa tus datos y paga</div>
                <div id="iniciasesi" style={{ color: colorsChange.login ? "white" : "" }}>Inicia Sesion</div>
                <div id="linea6"></div>
                <div id="valo">1</div>
                <div id="valo2">2</div>
                <div id="valo3">3</div>
                <div id="valo4">4</div>
                
            </div>
            

            <HomeRoutes />

            <div id="information">
                <div id="rectabout"></div>
            </div>
        </>
    )
}
