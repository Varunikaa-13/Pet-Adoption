import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Info.css';

function AdoptionInfo() {
  return (
    <section className="adoption-info">
      <h2>Planning to Adopt a Pet?</h2>
      <p className="info-intro">
        We are here to guide you through the adoption process! Check out the information below to help you get started.
      </p>
      <div className="info-card">
        {/* Link to the New Adoptions page */}
        <h3>🐾 <Link to="/new-adoptions" className="tips-link">Check for New Adoptions</Link></h3>
        <p>Explore our list of available pets looking for a loving home. Regularly updated!</p>
      </div>
      <div className="info-card">
        {/* Link to the Adoption Process page */}
        <h3>📝 <Link to="/adoption-process" className="tips-link">Ask about Adoption Process</Link></h3>
        <p>Learn about the steps involved in adopting a pet, including paperwork and requirements.</p>
      </div>
      <div className="info-card">
        {/* Link to the TipsPage */}
        <h3>🏠 <Link to="/adoption-tips" className="tips-link">New Adoption Tips</Link></h3>
        <p>Get tips on how to prepare your home for your new furry friend. Make them feel welcome!</p>
      </div>
    </section>
  );
}

export default AdoptionInfo;
