import React from 'react';
import './Ig.css';

function ImageGrid() {
  return (
    <section className="image-grid">
      <h2>Meet Our Pets</h2>
      <p className="grid-intro">
        Discover your next furry friend! Click on "Read More" for more details about each pet.
      </p>
      <div className="grid-container">
        <div className="grid-item">
          <img src="pet1.jpg" alt="Dog" />
          <button>Read More</button>
        </div>
        <div className="grid-item">
          <img src="pet1.jpg" alt="Cat" />
          <button>Read More</button>
        </div>
      </div>
    </section>
  );
}

export default ImageGrid;
