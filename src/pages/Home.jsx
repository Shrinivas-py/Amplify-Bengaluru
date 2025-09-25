import React from 'react';
import Hero from '../components/Hero';
import BusinessShowcase from '../components/BusinessShowcase';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <BusinessShowcase />
    </div>
  );
};

export default Home;