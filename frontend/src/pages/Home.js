import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import translatorIcon from '../images/icon.png';

const Home = () => {
  return (
    <div className="home-page">
      <h1>Fruit.Ai</h1>
      <p>"Be Healthy!"</p>
      <div className="card-container">
        <Link to="/chat" className="card card-1">
          <h2 className='chat-head'>Chat.</h2>
        </Link>
        <Link to="/more" className="card card-2">
          <h2></h2>
        </Link>
        <Link to="/contact" className="card card-3">
          <h2></h2>
        </Link>
        <Link to="/translator" className="card card-4">
          <img src={translatorIcon} alt="Translator" className="card-image" />
        </Link>
        <Link to="/faq" className="card card-5">
          <h2>FAQs</h2>
        </Link>
        <Link to="/about" className="card card-6">
          <h2>About</h2>
        </Link>
      </div>
    </div>
  );
};

export default Home;
