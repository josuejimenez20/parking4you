import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

import { Home } from "./components/home/Home";
import { Register } from "./components/register/Register";


export function AppRouter() {


  const [loginVerification, setLoginVerification] = useState(false);


  // Here We'll see if the user has the USER_STORAGE_KEY
  // for can choose if We give him <Home/> or <Register/> view
  useEffect(() => {
    const userKey = localStorage.getItem("USER_STORAGE_KEY");
    if (userKey) setLoginVerification(true);
  }, [])

  return (<>

    <Routes>

      <Route path="/" element={loginVerification ? <Home /> : <Register />} />
      <Route path="/Home/*" element={<Home />} />
      <Route path="/Register" element={<Register />} />
      {/* <Route path='*' element={<NotFound />} /> */}
    </Routes>
  </>);
}