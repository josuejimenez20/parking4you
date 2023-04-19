import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';

import { Home } from "./components/home/Home";
import { Home_administrative } from "./components/administrative/Home_administrative";
import { Register } from "./components/register/Register";
import { Login } from "./components/login/Login";


export function AppRouter() {

  const navigate = useNavigate();

  // Here We'll see if the user has the USER_STORAGE_KEY
  // for can choose if We give him <Home/> or <Register/> view
  useEffect(() => {
    const userKey = localStorage.getItem("USER_STORAGE_KEY");
    const userKeyAdministrative = localStorage.getItem("USER_STORAGE_KEY_ADMINISTRATIVE");

    if (userKeyAdministrative) {
      navigate('/Administrative');
    } else {
      (userKey) ? navigate('/Home') : navigate('/Login');
    }


  }, [])

  return (<>

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/Home/*" element={<Home />} />
      <Route path="/Administrative/*" element={<Home_administrative />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      {/* <Route path='*' element={<NotFound />} /> */}
    </Routes>
  </>);
}