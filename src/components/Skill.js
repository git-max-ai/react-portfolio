
import React from 'react';
import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact, FaPython, FaNodeJs } from "react-icons/fa";
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Skill() {
  
    
  
    return (
        
      <div className="progressBar">
          <h2>Skills</h2>
          <div className="one">
          <FaHtml5 size={28} color="white" />
         <ProgressBar style={{width:"44%", height:"30px"}} now={80} label={`${80}% `} />      
         <FaCss3Alt size={28} color="white" />
         <ProgressBar style={{width:"44%", height:"30px"}} now={70} label={`${70}% `} />
         
         </div>
         <div className="two">
         <FaJsSquare size={28} color="white" />
         <ProgressBar style={{width:"44%", height:"30px"}} now={60} label={`${60}% `} />
         <FaReact size={28} color="white" />
         <ProgressBar style={{width:"44%", height:"30px"}} now={60} label={`${60}% `} />
         </div>
         <div className="three">
         <FaPython size={28} color="white" />
         <ProgressBar style={{width:"44%", height:"30px"}} now={70} label={`${70}% `} />
         <FaNodeJs size={28} color="white" />
         <ProgressBar style={{width:"44%", height:"30px"}} now={50} label={`${50}% `} />
         </div>
      </div>
    );
  }



export default Skill;


