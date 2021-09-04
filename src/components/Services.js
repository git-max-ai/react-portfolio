import React, {Component} from "react";
import { FaPaintBrush, FaLaptopCode, FaGamepad } from "react-icons/fa";



class Services extends Component {
    state={};
    render(){
    return (
        <section className="services-sec" id="/services">
            <div className="cont">      

        <h1>SERVICES</h1></div>
        <div className="contain">
        <div class="card">
                <div class="content">
                    <div class="imgBx"><FaPaintBrush className="img" size={24} /></div>
                    <div class="contentBx">
                        <h3>Animations<br/><span></span></h3>
                    </div>
                </div>

                

                </div>  

                <div class="card">
                <div class="content">
                    <div class="imgBx"><FaLaptopCode className="img" size={24} /></div>
                    <div class="contentBx">
                        <h3>Web Design<br/><span></span></h3>
                    </div>
                </div>
                </div>  

                <div class="card">
                <div class="content">
                    <div class="imgBx"><FaGamepad className="img" size={24} /></div>
                    <div class="contentBx">
                        <h3>Game Development<br/><span></span></h3>
                    </div>
                </div>
                </div> 

                </div>
        </section>

    )
}
}

export default Services;