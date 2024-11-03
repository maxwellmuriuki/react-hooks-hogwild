import React, { useState } from 'react';

function HogTile({ hog, onHideHog }) {
  const [showDetails, setShowDetails] = useState(false);

  // Toggle showing/hiding details
  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // Hide hog from the list
  const handleHide = () => {
    onHideHog(hog.name);
  };

  return (
    <div className="ui card">
      <div className="image">
        <img src={hog.image} alt={hog.name} />
      </div>
      <div className="content">
        <h3 className="header">{hog.name}</h3>
        
        {/* Button to toggle details */}
        <button onClick={handleToggleDetails}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        
        {/* Button to hide the hog */}
        <button onClick={handleHide}>Hide</button>
        
        {/* Conditional rendering of details */}
        {showDetails && (
          <div className="extra content">
            <p><strong>Specialty:</strong> {hog.specialty}</p>
            <p><strong>Weight:</strong> {hog.weight}</p>
            <p><strong>Greased:</strong> {hog.greased ? 'Yes' : 'No'}</p>
            <p><strong>Highest Medal Achieved:</strong> {hog['highest medal achieved']}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HogTile;