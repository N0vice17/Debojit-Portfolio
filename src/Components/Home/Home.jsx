import React, { Component } from "react";
import '../Home/Home.css';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="intro">
                    Hello! I am Debojit Ganguly
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