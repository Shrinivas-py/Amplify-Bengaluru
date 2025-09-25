import React from 'react';
import './About.css';

const About = () => {
  const values = [
    {
      title: "Local First",
      description: "We prioritize and celebrate local businesses that make Bengaluru unique",
      icon: "🏪"
    },
    {
      title: "Community Driven",
      description: "Building stronger connections between businesses and residents",
      icon: "🤝"
    },
    {
      title: "Authentic Experiences", 
      description: "Helping people discover genuine local experiences and services",
      icon: "✨"
    },
    {
      title: "Sustainable Growth",
      description: "Supporting eco-friendly and socially responsible business practices",
      icon: "🌱"
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About Amplify Bengaluru</h1>
            <p>
              Empowering local businesses and connecting communities across India's Silicon Valley
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                At Amplify Bengaluru, we believe that local businesses are the heartbeat of our city. 
                Our mission is to create a thriving ecosystem where small and medium enterprises can 
                connect with customers, grow their reach, and contribute to Bengaluru's vibrant economy.
              </p>
              <p>
                We're more than just a platform – we're a community dedicated to celebrating the 
                entrepreneurial spirit that makes Bengaluru a global innovation hub while preserving 
                its local charm and cultural richness.
              </p>
            </div>
            <div className="mission-image">
              <div className="mission-icon">🎯</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <h2>Our Story</h2>
            <div className="story-timeline">
              <div className="timeline-item">
                <div className="timeline-year">2023</div>
                <div className="timeline-content">
                  <h3>The Beginning</h3>
                  <p>Started as a small initiative to help local businesses during challenging times</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <div className="timeline-content">
                  <h3>Community Growth</h3>
                  <p>Expanded to over 200+ local business partners across Bengaluru</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2025</div>
                <div className="timeline-content">
                  <h3>Digital Platform</h3>
                  <p>Launched our comprehensive digital platform to better serve our community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Want to Partner With Us?</h2>
            <p>Join hundreds of local businesses already part of the Amplify Bengaluru community</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Become a Partner</button>
              <button className="btn btn-secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;