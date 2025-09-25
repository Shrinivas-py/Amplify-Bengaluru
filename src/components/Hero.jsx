import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Discover Bengaluru's Best Local Businesses</h1>
          <p>
            Connect with authentic local experiences and support small businesses 
            that make our city unique. Join Amplify Bengaluru today!
          </p>
          <div className="hero-buttons">
            <Link to="/signup" className="btn btn-primary">
              Get Started
            </Link>
            <Link to="/login" className="btn btn-secondary">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;