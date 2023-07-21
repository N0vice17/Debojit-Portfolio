import React from "react";
import { Routes, Route } from "react-router-dom";
import Navlinks from "../../assets/data/Navlinks";

export default function Approuter() {
  return (
    <Routes>
      {
        Object.values(Navlinks).map((link) => (
          <Route key={link.to} path={link.to} element={link.element} />
        ))
      }
    </Routes>
  );
};
