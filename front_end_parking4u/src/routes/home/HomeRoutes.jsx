import React from "react";
import { Routes, Route } from 'react-router-dom';
import { About } from "../../components/home/sub_components/about";
import { Form_reservation } from "../../components/home/sub_components/Form_reservation/Form_reservation";
import { Payment_Reservation } from "../../components/home/sub_components/PayPalReservation/Payment_Reservation";
import { Reservation_information } from "../../components/home/sub_components/Reservation_information/Reservation_information";



export function HomeRoutes() {
  return (<>

    <Routes>

      {/* We get in "Home/ and We show about" */}
      <Route path="/" element={<Reservation_information />} />
      <Route path="/Reservation" element={<Form_reservation />} />
      <Route path="/Reservation/Payment_Reservation" element={<Payment_Reservation />} />
      <Route path="/Reservation/Payment_Reservation/Reservation_Information" element={<Reservation_information />} />
      {/* <Route path='*' element={<h2>No econctrado</h2>} /> */}
    </Routes>
  </>);
}