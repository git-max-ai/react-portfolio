import React, {Component} from "react";
import Typed from "react-typed";
import {Link} from "react-scroll";

class Header extends Component {
    state={};
    render(){
    return (
        <div className="header-wraper" id="/">
            <div className="main-info">
                <h1>Hey, I'm <span>Kanak Jadaun</span></h1>
                <Typed className="typed-text" strings={["UI/UX Designer", "Web Developer", "Game Developer", "Graphic Designer"]} typeSpeed={40} backSpeed={60} loop />
                <Link to="/contact" className="btn-main-offer" smooth={true} duration={1000}>contact me</Link>
            </div>
        </div>
    )
    }
}

export default Header;
