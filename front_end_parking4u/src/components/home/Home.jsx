import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { HomeRoutes } from '../../routes/home/HomeRoutes';

import "../../styles/home/main_page_style.css";



export function Home() {
    const navigate = useNavigate();

    const [colorsChange, setColorsChange] = useState({
        login: true,
        bookButton: false,
        data: false,
        end: false
    });

    const changeViewToRegister = () => {
        setColorsChange({
            login: true,
            bookButton: true,
            data: false,
            end: false
        })
        navigate('Reservation');
    }

    return (
        <>
            <header>
                <div id="rectangulo">
                    <button id="logoblanco"></button>
                    <button id="login">Iniciar Sesion</button>
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
                <button id="reserva"
                    onClick={() => {
                        changeViewToRegister();
                    }}
                > Reservar </button>
                <div id="clickalbot" style={{ color: colorsChange.bookButton ? "green" : "" }}>Click al boton de reserva</div>
                <div id="disfrutatu" style={{ color: colorsChange.end ? "green" : "" }}>Disfruta tu lugar</div>
                <div id="ingresatus" style={{ color: colorsChange.data ? "green" : "" }}>Ingresa tus datos</div>
                <div id="iniciasesi" style={{ color: colorsChange.login ? "green" : "" }}>Inicia Sesion</div>
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
