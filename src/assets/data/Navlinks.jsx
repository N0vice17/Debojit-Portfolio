import React from "react";
import About from "../../pages/About/About";
import Home from "../../pages/Home/Home";
import Contact from "../../pages/Contact/Contact";
import Portfolio from "../../pages/Portfolio/Portfolio";

const Navlinks = {
  home: {
    to: "/",
    element: <Home />,
    text: "Home",
  },
  about: {
    to: "/about",
    element: <About />,
    text: "About"
  },
  contact: {
    to: "/contact",
    element: <Contact />,
    text: "Contact",
  },
  portfolio: {
    to: "/portfolio",
    element: <Portfolio />,
    text: "Portfolio",
  },
};

export default Navlinks;
