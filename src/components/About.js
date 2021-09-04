import React, {Component} from 'react';
import logo from "../pngegg.png";
import Skill from "./Skill";
import { FaLinkedin } from "react-icons/fa";

class About extends Component {
    state={};
    render(){
    return (
        <section className="c-contact" id="/about">
        <div className="bo">
        <div className="container">
        <h1>ABOUT ME</h1>
        <div className="box">
            
            <p>
                I'm currently studying Software Engineering at K. R. Mangalam University having just completed my 1st year. I'm a hardworking person who is always willing to learn and grow. A person who seeks to develop skills and deliver the best version of herself. Creative, resourceful, flexible and able to adapt to changing priorities. A polite person having great communication skills and strong work ethics.
                
                <div className="ab">
        <ul className="about-me">
        <div className="ab-item1">
            <li>
                <strong>
                <h4>
                Name
                </h4>
                </strong>
            </li>
            <li>
                Kanak Jadaun
            </li>
      </div>
      <div className="ab-item1">
            <li>
            <strong>
                <h4>
                Age
                </h4>
            </strong>
            </li>
            <li>
                18 Years
            </li>
      </div>
      <div className="ab-item1">
            <li>
            <strong>
                <h4>
                Website
                </h4>
            </strong>
            </li>
            <li>
            <a href="#"><FaLinkedin size={24} color="#0e76a8"/></a>
            </li>
      </div>
      <div className="ab-item1">
            <li>
            <strong>
                <h4>
                Hometown
                </h4>
            </strong>
            </li>
            <li>
                Uttar Pradesh
            </li>
      </div>
      
      
    </ul>
        </div>
        

        <button className="resume">Download Resume</button>

                </p>
            <div>
                <img src={logo} style={{ width: "20rem", height:"17rem" }} alt="image" />
            </div>
        </div>
        </div>

        
        </div>
        <Skill />
        </section>
    )
    }
}

export default About
