import React from "react";
import About from "../About/About";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import NotFound from "../NotFound/NotFound";

const Navlinks = {
    home: {
        to: '/',
        element: <Home />,
        text: "</Home>",
    },
    about: {
        to: "/about",
        element: <About />,
        text: "</About>"
    },
    contact: {
        to: "/contact",
        element: <Contact />,
        text: "</Contact>",
    },
    portfolio: {
        to: "/portfolio",
        element: <Portfolio />,
        text: "</Portfolio>",
    },
    other:{
        to:"*",
        element: <NotFound/>,
    },
}

export default Navlinks;