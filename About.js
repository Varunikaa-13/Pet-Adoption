import React from 'react';
import './About.css';
import { FaHeart, FaPaw, FaHome } from 'react-icons/fa'; 

function About() {
  return (
    <section className="about">
      <h2>About Us</h2>
      <p>
        Welcome to the Cuddly Animalia Society, a dedicated organization focused on helping animals find their forever homes.
      </p>
      <div className="features">
        <div className="feature">
          <FaHeart size={40} color="#ff6f61" />
          <h3>Our Mission</h3>
          <p>We strive to connect loving families with adorable pets in need of homes.</p>
        </div>
        <div className="feature">
          <FaPaw size={40} color="#ff6f61" />
          <h3>Our Values</h3>
          <p>Compassion, commitment, and community are at the heart of everything we do.</p>
        </div>
        <div className="feature">
          <FaHome size={40} color="#ff6f61" />
          <h3>Join Us</h3>
          <p>Your support helps us provide shelter and care for homeless animals.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
