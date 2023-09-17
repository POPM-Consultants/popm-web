import React from "react";
import "./AboutUs.css"; // Import your custom CSS file for styling
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="about-us-container" id="About-us">
      <div className="about-us-cards">
        <div className="about-us-card">
          <div className="card-icon">
            <i className="fas fa-users"></i>
          </div>
          <h3 className="card-title">Our Team</h3>
          <p className="card-description">
            Meet our dedicated and talented team of professionals.
          </p>
        </div>
        <div className="about-us-card">
          <div className="card-icon">
            <i className="fas fa-chart-line"></i>
          </div>
          <h3 className="card-title">Our Achievements</h3>
          <p className="card-description">
            Discover our milestones and achievements over the years.
          </p>
        </div>
        <div className="about-us-card">
          <div className="card-icon">
            <i className="fas fa-history"></i>
          </div>
          <h3 className="card-title">Our History</h3>
          <p className="card-description">
            Learn about our journey from inception to where we are today.
          </p>
        </div>
      </div>
      <div className="about-us-content">
        <h1 className="about-us-title"  style={{ color: 'white' }} >About Us</h1>
        <p className="about-us-description">
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
