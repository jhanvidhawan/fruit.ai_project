import React from 'react';
import './About.css';
import vectorImage from '../images/Vector.png';

const About = () => {
  return (
    <div className="about-page">
      <div className="image-container">
        <img src={vectorImage} alt="Vector" className="about-image blur" />
        <img src={vectorImage} alt="Vector" className="about-image blur" />
        <img src={vectorImage} alt="Vector" className="about-image clear" />
      </div>
      <div className="about-content">
        <h1>Fruit.ai</h1>
        <p>
          Whether you're looking to discover new fruits, understand their nutritional values, or find the
          perfect fruit for your diet, our AI-driven chatbot is here to assist. We provide personalized fruit
          recommendations tailored to your health needs, making it easier for you to integrate the best fruits into your daily routine.
        </p>
        <button className="about-button">About</button>
      </div>
    </div>
  );
};

export default About;
