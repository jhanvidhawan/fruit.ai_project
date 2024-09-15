import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState('login'); 
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      console.log('Logging in with:', email, password);
      navigate('/home');
    } else {
      alert('Please enter both Email Address and Password');
    }
  };

  const handleRegister = () => {
    if (email && password) {
      console.log('Registering with:', email, password);
      navigate('/home');
    } else {
      alert('Please enter both Email Address and Password');
    }
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <h1 className="form-title">{mode === 'login' ? 'Login' : 'Register'}</h1>
        <p className='para'>By signing in you are agreeing <br/> our <span className='span-text'>Term and privacy policy</span></p>

        <div className="form-header">
          <button
            className={`form-header-button ${mode === 'login' ? 'active' : ''}`}
            onClick={() => setMode('login')}
          >
            Login
          </button>
          <button
            className={`form-header-button ${mode === 'register' ? 'active' : ''}`}
            onClick={() => setMode('register')}
          >
            Register
          </button>
        </div>

        {mode === 'login' ? (
          <div className="form-body">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="form-footer">
              <label className="remember-me">
                <input type="checkbox" />
                Remember Password
              </label>
              <a href="#forgot-password" className="forgot-password">
                Forgot Password?
              </a>
            </div>
            <button onClick={handleLogin}>Login</button>
          </div>
        ) : (
          <div className="form-body">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>
          </div>
        )}

        <div className="social-connect">
          <p>Or connect with:</p>
          <div className="social-icons1">
            <a href="https://facebook.com" className="social-icon facebook-icon" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" className="social-icon instagram-icon" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" className="social-icon linkedin-icon" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://pinterest.com" className="social-icon pinterest-icon" target="_blank" rel="noopener noreferrer">
              <FaPinterest />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
