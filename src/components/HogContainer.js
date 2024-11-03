
import React from 'react';
import HogTile from './HogTile';

function HogContainer({ hogs, onToggleHide, isGreased, sortBy }) {
  // Filter hogs based on greased status
  const filteredHogs = hogs
    .filter((hog) => !isGreased || hog.greased)
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'weight') return a.weight - b.weight;
      return 0;
    });

  return (
    <div className="ui grid container">
      {filteredHogs.map((hog) => (
        <HogTile 
          key={hog.name} 
          hog={hog} 
          onToggleHide={onToggleHide} 
        />
      ))}
    </div>
  );
}

export default HogContainer;