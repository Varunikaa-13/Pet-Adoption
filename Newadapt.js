import React from 'react';
import './Newadapt.css'; // Import the CSS file

function NewAdoptionsPage() {
  return (
    <div className="new-adoptions-page">
      <h1>Check for New Adoptions</h1>
      <p>Here you will find a list of the latest pets available for adoption. Check back regularly for updates!</p>
      
      {/* Optionally display pet list */}
      <div className="pet-list">
        {/* Example pet card */}
        <div className="pet-card">
          <img src="dog.jpg" alt="Golden Retriever" />
          <h3>Golden Retriever</h3>
          <p>Age: 2 years</p>
        </div>
        {/* Add more pet cards here */}
      </div>
    </div>
  );
}

export default NewAdoptionsPage;
