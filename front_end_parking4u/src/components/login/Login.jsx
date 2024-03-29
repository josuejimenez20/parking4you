import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/users/loginUser";
import { ToastMessage } from "../common/alerts/ToastMessage";
import { registerDataLocalStorage } from "../../helpers/login/registerDataLocalStorage";

import "../../styles/login_and_register/login/principal_login_style.css";
import LogoBlanco from "../../assets/LogoBlanco.png";

export function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, success, error, userData
    } = useSelector((state) => state.users.login);

    const handleLoginUser = (data) => {

        const formData = {
            email: data.target.email.value,
            password: data.target.password.value
        }
        dispatch(loginUser(formData))
    }

    useEffect(() => {
        if (success) {
            registerDataLocalStorage(userData[0].uniqueUserId, 'USER_STORAGE_KEY');

            const user_name = userData[0].name + " " + userData[0].last_name + " " + userData[0].second_last_name;
            registerDataLocalStorage(user_name, 'USER_NAME');

            if (userData[0].userAdministrative) {
                registerDataLocalStorage(userData[0].userAdministrative, 'USER_STORAGE_KEY_ADMINISTRATIVE');
                navigate('/Administrative', { replace: true });
                return;
            }

            navigate('/Home', { replace: true });
        }
    }, [userData])

    return (
        <>
            <header>
                <div id="rectangulo">
                    <img src={LogoBlanco} alt="" />
                </div>
            </header>

            <div id="div-principal-login">
                <div id="title">Inicio de sesión</div>
                <form className="form_class" id="form-login" action="formulario.html" method="submit"
                    onSubmit={(e) => {
                        e.preventDefault()
                        handleLoginUser(e)
                    }}>
                    <div className="box" id="inputs">
                        <label className="fl fontLabel"> Usuario o Email: </label>
                        <div className="new iconBox">
                            <i className="fa fa-user" aria-hidden="true"></i>
                        </div>
                        <div className="fr">
                            <input type="email" name="email" placeholder="Usuario"
                                className="textBox" required />
                        </div>

                    </div>

                    <div className="box" id="inputs">
                        <label className="fl fontLabel"> Contraseña: </label>
                        <div className="fl iconBox"><i className="fa fa-key" aria-hidden="true"></i></div>
                        <div className="fr">
                            <input type="Password" required name="password" placeholder="Contraseña" className="textBox" />
                        </div>

                    </div>
                    {/* <div className="box" style="background: #0d111e;"> */}
                    <div className="box" id="inputs">
                        <input type="Submit" name="Submit" className="submit" value="Enviar" />
                    </div>
                    <div id="links">
                        <a id="link_login" onClick={() => {
                            navigate('/Register')
                        }}> Regístrese </a>
                    </div>
                    {
                        error ?
                            <ToastMessage message={error} type={'error'} />
                            :
                            <></>
                    }
                </form>
            </div>
        </>
    )
}