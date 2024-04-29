import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Userinfo.css";

function Userinfo() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, phone };
    axios
      .post("http://localhost:8080/api/UserEntitys/postuser", formData)
      .then(() => {
        console.log("Form submitted successfully");
        // Route to Confirmation component after form submission
        navigate("/Confirmation");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  const handleReviewTicketDetails = () => {
    navigate("/landing");
  };

  return (
    <div className="body7">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h3>ENTER YOUR DETAILS:</h3>
          <div className="form-group">
            <label htmlFor="name">NAME:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">EMAIL:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">PHONE:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <button type="submit"style={{ backgroundColor: 'red', color: '#fff', fontSize: '1.2rem' }}>SUBMIT</button>
          <button type="button"style={{ backgroundColor: 'red', color: '#fff', fontSize: '1.2rem' }} onClick={handleReviewTicketDetails}>
            Review Ticket Details
          </button>
        </form>
      </div>
    </div>
  );
}

export default Userinfo;
