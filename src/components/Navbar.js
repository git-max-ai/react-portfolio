import React, {component} from "react";
import logo from "../pngegg.png";
import { Link } from "react-scroll";

//react fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-dark">
<div className="container">
  <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..."/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
  </button>
  

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" to='/'>Home</Link>
      </li>
      <li className="nav-item">
        <Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} className="nav-link"to="/about">about me</Link>
      </li>
      <li className="nav-item">
        <Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" to="/services">services</Link>
      </li>
      <li className="nav-item">
      <Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" to="/portfolio">portfolio</Link>
      </li>
      <li className="nav-item">
      <Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" to="/contact">contact</Link>
      </li>
      
    </ul>
    
  </div>
</div>
</nav>
    )
}

export default Navbar
