import React, { Component } from "react";
import '../Home/Home.css';
import Typewriter from 'typewriter-effect';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { useState, useEffect } from "react";

const homestring = [
    'Hello! I am Debojit Ganguly',
    'I Love to Code',
];

// const [date, setDate] = useState(new Date());
const date= new Date();
// function refresh() {
//     setDate(new Date());
// }

class Home extends Component {
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
                    <div className="Clock">
                        {date.toLocaleTimeString()}
                    </div>
                    <div className='icons'>
                        <a href="https://github.com/N0vice17" target="_blank" className="github">
                            <FaGithubSquare />
                        </a>
                        <a href="https://www.linkedin.com/in/debojit-ganguly-907771242/" target="_blank" className="linkedin">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com/Debojit_18" target="_blank" className="twitter">
                            <FaTwitterSquare />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
};

export default Home