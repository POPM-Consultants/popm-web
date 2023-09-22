import React from "react";
import "./AboutUs.css"; // Import your custom CSS file for styling
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="about-us-container" id="About-us">
      <div className="about-us-cards">
        <div className="about-us-card">
          <h3 className="card-title">Our Ninjas</h3>
          <p className="card-description">
          Meet our dedicated engineers with special chakras.
          </p>
        </div>
        <div className="about-us-card">
          <h3 className="card-title">Our TAQAT</h3>
          <p className="card-description">
          Business consulting, Product featuring, Ecom, ad campaigns
          </p>
        </div>
        <div className="about-us-card">
          <h3 className="card-title">Our Deliverables</h3>
          <p className="card-description">
          Ecom analysis, Ecom Website, Ecom Shoot, Ecom ad campaigns
          </p>
        </div>
      </div>
      <div className="about-us-content">
        <h1 className="about-us-title" style={{ color: 'white' }}>Company Overview</h1>
        <p className="about-us-description"></p>
      </div>
    </div>
  );
};

export default AboutUs;
