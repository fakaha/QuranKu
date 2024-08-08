import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { DetailSurah } from "../pages/DetailSurah";

export const RoutesList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/detail-surat/:id" element={<DetailSurah />}/>
      </Routes>
    </BrowserRouter>
  );
};
