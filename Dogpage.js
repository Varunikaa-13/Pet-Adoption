import React, { useState } from 'react';
import animalsData from '../assets/Animaldata';
import './Dogpage.css'; // Ensure to create a separate CSS file for styling

function DogPage() {
  // Define options for filters
  const breeds = [...new Set(animalsData.filter(animal => animal.type === 'dog').map(animal => animal.breed))]; // Unique breeds for dogs
  const ages = [...new Set(animalsData.filter(animal => animal.type === 'dog').map(animal => animal.age))]; // Unique ages for dogs
  const colors = [...new Set(animalsData.filter(animal => animal.type === 'dog').map(animal => animal.color))]; // Unique colors for dogs

  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedAge, setSelectedAge] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  // Filter for dogs based on the selected filters
  const filteredDogs = animalsData.filter(animal => {
    return (
      animal.type === 'dog' &&
      (!selectedBreed || animal.breed === selectedBreed) &&
      (!selectedAge || animal.age === selectedAge) &&
      (!selectedColor || animal.color === selectedColor)
    );
  });

  return (
    <div className="dog-page">
      <h1>Dog Adoption Page</h1>
      <p>Find your perfect canine companion from our list of available dogs for adoption.</p>

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

      <div className="dog-grid">
        {filteredDogs.map((dog, index) => (
          <div className="dog-card" key={index}>
            <img src={dog.image} alt={dog.breed} className="dog-image" />
            <h3>{dog.breed}</h3>
            <p>Age: {dog.age}</p>
            <p>Color: {dog.color}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogPage; 