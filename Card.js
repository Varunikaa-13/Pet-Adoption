import React from 'react';
import { useNavigate } from 'react-router-dom'; // Hook for navigation
import './Card.css'; // CSS for styling
import { PiCat } from "react-icons/pi"; // Cat icon
import { TbDogBowl } from "react-icons/tb"; // Dog bowl icon
import { MdOutlinePets } from "react-icons/md"; // Pets icon

function Cards() {
  const navigate = useNavigate();

  return (
    <section className="cards">
      <div className="card" onClick={() => navigate('/dogs')}>
        <div className="icon">
          <TbDogBowl size={60} color="black" /> {/* Dog bowl icon */}
        </div>
        <h3>Dogs</h3>
        <p>Find your new furry friend.</p>
      </div>
      <div className="card" onClick={() => navigate('/cats')}>
        <div className="icon">
          <PiCat size={60} color="black" /> {/* Cat icon */}
        </div>
        <h3>Cats</h3>
        <p>Adopt a playful companion.</p>
      </div>
      <div className="card" onClick={() => navigate('/other-animals')}>
        <div className="icon">
          <MdOutlinePets size={60} color="black" /> {/* Pets icon */}
        </div>
        <h3>Other Animals</h3>
        <p>Explore more options.</p>
      </div>
    </section>
  );
}

export default Cards;
