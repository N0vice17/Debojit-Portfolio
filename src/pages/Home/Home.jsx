import React, { Component } from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const homestring = [
  "Hello! I am Debojit Ganguly",
  "I Love to Code",
];

function theClock() {
  let fullTime = new Date();

  let hour = fullTime.getHours();
  hour = hour.toString();
  hour = hour.padStart(2, "0");

  let minute = fullTime.getMinutes();
  minute = minute.toString();
  minute = minute.padStart(2, "0");

  let second = fullTime.getSeconds();
  second = second.toString();
  second = second.padStart(2, "0");

  let desktop_time = hour + ":" + minute + ":" + second;

  document.querySelector(".Clock").textContent = desktop_time;
};

setInterval(theClock, 1000);

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container-home">
          <div className="intro">
            <Typewriter
              options={{
                strings: homestring,
                autoStart: true,
                loop: true,
                deleteSpeed: 20,
              }}
            />
          </div>
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
        <div className="Clock">00:00:00</div>
      </div>
    );
  };
};
