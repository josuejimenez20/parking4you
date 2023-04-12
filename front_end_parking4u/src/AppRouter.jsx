import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';

import { Home } from "./components/home/Home";
import { Register } from "./components/register/Register";
import { Login } from "./components/login/Login";


export function AppRouter() {

  const navigate = useNavigate();

  // Here We'll see if the user has the USER_STORAGE_KEY
  // for can choose if We give him <Home/> or <Register/> view
  useEffect(() => {
    const userKey = localStorage.getItem("USER_STORAGE_KEY");

   (userKey) ? navigate('/Home') : navigate('/Login');

  }, [])

  return (<>

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/Home/*" element={<Home />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />      
      {/* <Route path='*' element={<NotFound />} /> */}
    </Routes>
  </>);
}