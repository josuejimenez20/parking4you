import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { newUser } from "../../redux/actions/users/newUser";

import LogoBlanco from "../../assets/LogoBlanco.png";
import "../../styles/login/login_and_register_style.css";
import { registerDataLocalStorage } from "../../helpers/login/registerDataLocalStorage";

export function Register() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, success, error, userData
    } = useSelector((state) => state.users.new);

    useEffect(() => {
        if (success) {
            if (success) {
                registerDataLocalStorage(userData.uniqueUserId);
                navigate('/Home', { replace: true });
            }
        }
    }, [userData])

    const handleRegisterUser = (data) => {
        const formData = {
            name: data.target.name.value,
            last_name: data.target.last_name.value,
            second_last_name: data.target.second_last_name.value,
            telephone: data.target.telephone.value,
            email: data.target.email.value,
            password: data.target.password.value
        }

        formData.telephone = Number(formData.telephone);

        dispatch(newUser(formData));
    }

    return (<>
        <header>
            <div id="rectangulo">
                <img src={LogoBlanco} alt="" />
            </div>
        </header>

        <div className="container">
            <form className="form_class" action="formulario.html" method="submit"
                onSubmit={(e) => {
                    e.preventDefault()
                    handleRegisterUser(e)
                }}>
                <div className="box">
                    <label className="fl fontLabel"> Nombre: </label>
                    <div className="new iconBox">
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <div className="fr">
                        <input type="text" name="name" placeholder="Nombre"
                            className="textBox" required />
                    </div>
                    {/* <div className="clr">f</div> */}
                </div>
                <div className="box">
                    <label className="fl fontLabel"> Apellido Paterno: </label>
                    <div className="fl iconBox"><i className="fa fa-user" aria-hidden="true"></i></div>
                    <div className="fr">
                        <input type="text" required name="last_name"
                            placeholder="Apellido" className="textBox" />
                    </div>
                    {/* <div className="clr">f</div> */}
                </div>
                <div className="box">
                    <label className="fl fontLabel"> Apellido Materno: </label>
                    <div className="fl iconBox"><i className="fa fa-user" aria-hidden="true"></i></div>
                    <div className="fr">
                        <input type="text" required name="second_last_name"
                            placeholder="Apellido" className="textBox" />
                    </div>
                    {/* <div className="clr">f</div> */}
                </div>
                <div className="box">
                    <label className="fl fontLabel"> Telefono: </label>
                    <div className="fl iconBox"><i className="fa fa-phone-square" aria-hidden="true"></i></div>
                    <div className="fr">
                        <input type="number" required name="telephone" placeholder="Numero telefonico" className="textBox" />
                    </div>
                    <div className="clr">f</div>
                </div>
                <div className="box">
                    <label className="fl fontLabel"> Email: </label>
                    <div className="fl iconBox"><i className="fa fa-envelope" aria-hidden="true"></i></div>
                    <div className="fr">
                        <input type="email" required name="email" placeholder="Correo electronico" className="textBox" />
                    </div>
                    {/* <div className="clr">f</div> */}
                </div>
                <div className="box">
                    <label className="fl fontLabel"> Contraseña </label>
                    <div className="fl iconBox"><i className="fa fa-key" aria-hidden="true"></i></div>
                    <div className="fr">
                        <input type="Password" required name="password" placeholder="Contraseña" className="textBox" />
                    </div>
                    {/* <div className="clr">f</div> */}
                </div>
                {/* <div className="box" style="background: #0d111e;"> */}
                <div className="box">
                    <input type="Submit" name="Submit" className="submit" />
                </div>
            </form>

            {error
                ? <h2 id="error_register">{error}</h2>
                : <></>}
        </div>
    </>)
}