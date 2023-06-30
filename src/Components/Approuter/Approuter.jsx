import React from "react";
import { Routes, Route } from "react-router-dom";
import Navlinks from "../Navbar/Navlinks";
import NotFound from "../NotFound/NotFound";

export default function Approuter() {
  return (
    <Routes>
      {Object.values(Navlinks).map((link) => (
        <Route key={link.to} path={link.to} element={link.element} />
      ))}
      <Route path="*" element={NotFound}/>
    </Routes>
  );
};