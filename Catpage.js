import React, { useState } from 'react';
import animalsData from '../assets/Animaldata';
import './Catpage.css'; // Ensure to create a separate CSS file for styling

function CatPage() {
  // Define options for filters
  const filteredData = animalsData.filter(animal => animal.type === 'cat');
  
  const breeds = [...new Set(filteredData.map(animal => animal.breed))]; // Unique breeds for cats
  const ages = [...new Set(filteredData.map(animal => animal.age))]; // Unique ages for cats
  const colors = [...new Set(filteredData.map(animal => animal.color))]; // Unique colors for cats

  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedAge, setSelectedAge] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  // Filter for cats based on the selected filters
  const filteredCats = filteredData.filter(animal => {
    return (
      (!selectedBreed || animal.breed === selectedBreed) &&
      (!selectedAge || animal.age === selectedAge) &&
      (!selectedColor || animal.color === selectedColor)
    );
  });

  return (
    <div className="cat-page">
      <h1>Cat Adoption Page</h1>
      <p>Find your perfect feline companion from our list of available cats for adoption.</p>

      <div className="filters">
        {/* Breed Filter */}
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

        {/* Age Filter */}
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

        {/* Color Filter */}
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

      {/* Displaying Filtered Cats */}
      <div className="cat-grid">
        {filteredCats.map((cat, index) => (
          <div className="cat-card" key={index}>
            <img src={cat.image} alt={cat.breed} className="cat-image" /> {/* Displaying the cat image */}
            <h3>{cat.breed}</h3> {/* Displaying the breed name */}
            <p>Age: {cat.age}</p> {/* Displaying age */}
            <p>Color: {cat.color}</p> {/* Displaying color */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatPage;
