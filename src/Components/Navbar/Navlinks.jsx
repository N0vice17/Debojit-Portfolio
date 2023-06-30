import React from "react";
import About from "../About/About";

const Navlinks = {
    home: {
        to: '/',
        element: "",
        text: "Home",
    },
    about: {
        to: "/about",
        element: <About />,
        text: "About"
    },
    contact: {
        to: "/contact",
        element: "",
        text: "Contact",
    },
    portfolio: {
        to: "/portfolio",
        element: "",
        text: "Portfolio",
    },
}

export default Navlinks;