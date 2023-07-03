import React from "react";
import '../Navbar/Navbar.css'
import { NavLink } from "react-router-dom";
import Navlinks from "../Navbar/Navlinks";
import photo from '/home/debojit/Desktop/Portfolio/public/portfolio.svg';

export default function Navbar(){
    return(
    <nav className="Navbar">
      <div className="container">
        <div className="img">
          <a href="/">
          <img className="image" src={photo} alt="Portfolio"></img> 
          </a>
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