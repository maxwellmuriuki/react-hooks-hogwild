import React, { useState } from 'react';
import Nav from './Nav';
import HogContainer from './HogContainer'; 
import HogForm from './HogForm';           
import hogData from '../porkers_data';     




function App() {
	const [hogs, setHogs] = useState(hogData);
	const [isGreased, setIsGreased] = useState(false);
	const [sortBy, setSortBy] = useState(null);
	const [hiddenHogs, setHiddenHogs] = useState([]);
  
	// Toggle greased filter
	const handleToggleGreased = () => {
	  setIsGreased(!isGreased);
	};
  
	// Handle sorting change
	const handleSortChange = (e) => {
	  setSortBy(e.target.value);
	};
  
	// Add a new hog
	const handleAddHog = (newHog) => {
	  setHogs([...hogs, newHog]);
	};
  
	// Hide a specific hog
	const handleHideHog = (hogName) => {
	  setHiddenHogs([...hiddenHogs, hogName]);
	};
  
	// Apply filters and sorting
	const filteredHogs = hogs
	  .filter(hog => !isGreased || hog.greased)         // Filter by greased if selected
	  .filter(hog => !hiddenHogs.includes(hog.name))    // Exclude hidden hogs
	  .sort((a, b) => {                                 // Apply sorting
		if (sortBy === 'name') return a.name.localeCompare(b.name);
		if (sortBy === 'weight') return a.weight - b.weight;
		return 0;
	  });
  
	return (
	  <div className="App">
		<Nav />
		
		{/* Greased Filter */}
		<label>
		  Show Greased Hogs Only
		  <input
			type="checkbox"
			checked={isGreased}
			onChange={handleToggleGreased}
		  />
		</label>
		
		{/* Sort Option */}
		<label>
		  Sort by:
		  <select onChange={handleSortChange} value={sortBy}>
			<option value="">None</option>
			<option value="name">Name</option>
			<option value="weight">Weight</option>
		  </select>
		</label>
  
		{/* Hog Form to Add New Hogs */}
		<HogForm onAddHog={handleAddHog} />
  
		{/* Display the HogContainer with filtered hogs and hide functionality */}
		<HogContainer hogs={filteredHogs} onHideHog={handleHideHog} />
	  </div>
	);
  }
  
  export default App;