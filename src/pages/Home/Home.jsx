import React, { Component } from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const homestring = [
  "Hello! I am Debojit Ganguly",
  "I Love to Code",
];

// const [date, setDate] = useState(new Date());
const date = new Date();
// function refresh() {
//     setDate(new Date());
// }

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="intro">
          <Typewriter
            options={{
              strings: homestring,
              autoStart: true,
              loop: true,
              deleteSpeed: 20,
            }}
          />
          {/* <div className="Clock">
            {date.toLocaleTimeString()}
          </div> */}
          <div className="icons">
            <Link to="https://github.com/N0vice17" target="_blank" rel="noreferrer noopener" className="github">
              <FaGithubSquare />
            </Link>
            <Link to="https://www.linkedin.com/in/debojit-ganguly-907771242/" target="_blank" rel="noreferrer noopener" className="linkedin">
              <FaLinkedin />
            </Link>
            <Link to="https://twitter.com/Debojit_18" target="_blank" rel="noreferrer noopener" className="twitter">
              <FaTwitterSquare />
            </Link>
          </div>
        </div>
      </div>
    );
  };
};
