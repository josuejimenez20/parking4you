import React from "react";
import { Routes, Route } from 'react-router-dom';
import { About } from "../../components/home/sub_components/about";
import { Book } from "../../components/home/sub_components/Book";



export function HomeRoutes() {
  return (<>

    <Routes>

      {/* We get in "Home/ and We show about" */}
      <Route path="/" element={<About />} />
      <Route path="/Book" element={<Book />} />

      {/* <Route path='*' element={<NotFound />} /> */}
    </Routes>
  </>);
}