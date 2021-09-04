import React, {Component} from "react";
import { FaPaintBrush, FaLaptopCode, FaGamepad } from "react-icons/fa";
import image from "../bg.jpg";



class Portfolio extends Component {
    state={};
    render(){
    return (
        <section className="port-sec" id="/portfolio">
            <div className="cont">      
            <h1>Portfolio</h1></div>
            <div className="conta">
                <a href="#">
            <div className="cardy">
                <div className="conte">
                    <h3> Python </h3>
                <div className="ima"><img className="imo" src={image} alt="project..."/></div>
                <div className="boxx">
                <h4>Animations<br/>Creative Designer</h4>
                </div>
                </div>
            </div>
            </a>

            <a href="#">
            <div className="cardy">
                <div className="conte">
                    <h3> Python </h3>
                <div className="ima"><img className="imo" src={image} alt="project..."/></div>
                <div className="boxx">
                <h4>Animations<br/>Creative Designer</h4>
                </div>
                </div>
            </div>
            </a>

            <a href="#">
            <div className="cardy">
                <div className="conte">
                    <h3> Python </h3>
                <div className="ima"><img className="imo" src={image} alt="project..."/></div>
                <div className="boxx">
                <h4>Animations<br/>Creative Designer</h4>
                </div>
                </div>
            </div>
            </a>

            <a href="#">
            <div className="cardy">
                <div className="conte">
                    <h3> Python </h3>
                <div className="ima"><img className="imo" src={image} alt="project..."/></div>
                <div className="boxx">
                <h4>Animations<br/>Creative Designer</h4>
                </div>
                </div>
            </div>
            </a>

            <a href="#">
            <div className="cardy">
                <div className="conte">
                    <h3> Python </h3>
                <div className="ima"><img className="imo" src={image} alt="project..."/></div>
                <div className="boxx">
                <h4>Animations<br/>Creative Designer</h4>
                </div>
                </div>
            </div>
            </a>

            <a href="#">
            <div className="cardy">
                <div className="conte">
                    <h3> Python </h3>
                <div className="ima"><img className="imo" src={image} alt="project..."/></div>
                <div className="boxx">
                <h4>Animations<br/>Creative Designer</h4>
                </div>
                </div>
            </div>
            </a>


            </div>
        

                
        </section>

    )
}
}

export default Portfolio;