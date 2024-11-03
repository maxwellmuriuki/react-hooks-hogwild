// Import necessary libraries
import React, { useState } from 'react';

// HogForm component to handle adding new hogs
// Accepts an 'onAddHog' prop function from App.js for adding new hogs to the list
function HogForm({ onAddHog }) {
  // Local state for the form inputs to capture new hog details
  const [formData, setFormData] = useState({
    name: '',           // Hog's name
    specialty: '',      // Hog's specialty
    weight: '',         // Hog's weight
    greased: false,     // Whether the hog is greased or not
    image: '',          // URL of the hog's image
    highestMedal: ''    // Hog's highest medal achieved
  });

  // Event handler for handling form input changes
  // Updates local state to reflect user input in real-time
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value  // Handles checkbox (boolean) and text inputs
    });
  };

  // Event handler for form submission
  // Prevents default form behavior, passes formData to onAddHog, then resets form
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevents page reload on form submit
    onAddHog({
      name: formData.name,
      specialty: formData.specialty,
      weight: parseFloat(formData.weight), // Convert weight to a number
      greased: formData.greased,
      image: formData.image,
      highestMedal: formData.highestMedal
    });
    setFormData({           // Reset form fields after submission
      name: '',
      specialty: '',
      weight: '',
      greased: false,
      image: '',
      highestMedal: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="ui form">
      {/* Input for hog name */}
      <div className="field">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter hog name"
          required
        />
      </div>

      {/* Input for hog specialty */}
      <div className="field">
        <label>Specialty</label>
        <input
          type="text"
          name="specialty"
          value={formData.specialty}
          onChange={handleChange}
          placeholder="Enter hog specialty"
        />
      </div>

      {/* Input for hog weight */}
      <div className="field">
        <label>Weight</label>
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          placeholder="Enter hog weight"
          required
        />
      </div>

      {/* Checkbox for greased status */}
      <div className="field">
        <label>
          <input
            type="checkbox"
            name="greased"
            checked={formData.greased}
            onChange={handleChange}
          />
          Greased
        </label>
      </div>

      {/* Input for hog image URL */}
      <div className="field">
        <label>Image URL</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Enter image URL"
        />
      </div>

      {/* Input for highest medal achieved */}
      <div className="field">
        <label>Highest Medal Achieved</label>
        <input
          type="text"
          name="highestMedal"
          value={formData.highestMedal}
          onChange={handleChange}
          placeholder="Enter highest medal"
        />
      </div>

      {/* Submit button */}
      <button type="submit" className="ui button primary">Add Hog</button>
    </form>
  );
}

export default HogForm;
