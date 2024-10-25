import React, { useState } from 'react';
import animalsData from '../assets/Animaldata';
import './Other.css'; // Ensure you have the CSS for styling

function OtherAnimalsPage() {
  // Filter for 'other' type animals from the main animalsData
  const otherAnimalsData = animalsData.filter(animal => animal.type === 'other');

  // Define options for filters
  const breeds = [...new Set(otherAnimalsData.map(animal => animal.breed))]; // Unique breeds
  const ages = [...new Set(otherAnimalsData.map(animal => animal.age))]; // Unique ages
  const colors = [...new Set(otherAnimalsData.map(animal => animal.color))]; // Unique colors

  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedAge, setSelectedAge] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  // Filter for other animals based on the selected filters
  const filteredOtherAnimals = otherAnimalsData.filter(animal => {
    return (
      (!selectedBreed || animal.breed === selectedBreed) &&
      (!selectedAge || animal.age === selectedAge) &&
      (!selectedColor || animal.color === selectedColor)
    );
  });

  return (
    <div className="other-animals-page">
      <h1>Other Animals Adoption Page</h1>
      <p>Find other animals available for adoption.</p>

      <div className="filters">
        <div className="filter-group">
          <label htmlFor="breed">Breed:</label>
          <select
            id="breed"
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
          >
            <option value="">All Breeds</option>
            {breeds.map((breed, index) => (
              <option key={index} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="age">Age:</label>
          <select
            id="age"
            value={selectedAge}
            onChange={(e) => setSelectedAge(e.target.value)}
          >
            <option value="">All Ages</option>
            {ages.map((age, index) => (
              <option key={index} value={age}>
                {age}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="color">Color:</label>
          <select
            id="color"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            <option value="">All Colors</option>
            {colors.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="other-animals-grid">
        {filteredOtherAnimals.map((animal, index) => (
          <div className="other-animal-card" key={index}>
            <img src={animal.image} alt={animal.breed} className="animal-image" />
            <h3>{animal.breed}</h3>
            <p>Age: {animal.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OtherAnimalsPage;
