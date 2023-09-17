import React from 'react';
import PropTypes from 'prop-types';
import './services-card.css';

const ServiceCard = ({ logo, title, description }) => {
  return (
    <div className="service-card">
      <img src={logo} alt={title} className="service-logo" />
      <h2 className="service-title custom-text-blue">{title}</h2>
      <p className="service-description custm-text-gray">{description}</p>
    </div>
  );
};

ServiceCard.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;
