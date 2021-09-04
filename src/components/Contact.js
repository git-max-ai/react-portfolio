import React, { useState } from "react";

const Contact = () => {
    
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <section className="contact-sec" id="/contact">
    <div className="cont">      
    <h1>Portfolio</h1></div>
    <div className="common">
    <form onSubmit={handleSubmit}>
      <div className="name">
        <label htmlFor="name"><h4>Name </h4></label>
        <input type="text" className="input" id="name" required />
      </div>
      <div className="email">
        <label htmlFor="email"><h4>Email </h4></label>
        <input type="email" className="email_input" id="email" required />
      </div>
      <div className="msg">
        <label className="mes" htmlFor="message"><h4>Message </h4></label>
        <textarea id="message" className="msg_input"  required />
      </div>
      <button className="but" type="submit">{status}</button>
    </form>

    </div>
    </section>
  );
};

export default Contact;