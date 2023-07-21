import React from "react";
import '../Navbar/Navbar.css'
import { NavLink, Link } from "react-router-dom";
import Navlinks from "../Navbar/Navlinks";

export default function Navbar(){
    return(
    <nav className="Navbar">
      <div className="container">
        <div className="logo">
          <Link to="/" className="Debojit">
            Debojit
          </Link>
        </div>
      <div className="list">
        <ul>
          {
            Object.values(Navlinks).map((link, index) => (
              <li key={index}>
                <NavLink to={link.to}>{link.text}</NavLink>
              </li>
            ))
          }
        </ul>
      </div>
      </div>
    </nav>
    );
};
