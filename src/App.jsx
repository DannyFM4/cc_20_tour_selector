import React, { useState } from 'react';
import Gallery from './components/Gallery';
import DestinationSelector from './components/DestinationSelector';
// import './styles/styles.css';

function App() {
  const [tours, setTours] = useState([]);
  const [selectedName, setSelectedName] = useState('All'); // State for selected name

  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  // Filter tours based on the selected name
  const filteredTours =
    selectedName === 'All'
      ? tours
      : tours.filter((tour) => tour.name === selectedName);

  return (
    <main>
      <h1>Our Tours</h1>
      {/* Add DestinationSelector */}
      <DestinationSelector
        tours={tours}
        selectedName={selectedName}
        setSelectedName={setSelectedName}
      />
      {/* Pass filtered tours to Gallery */}
      <Gallery tours={filteredTours} setTours={setTours} onRemove={removeTour} />
    </main>
  );
}

export default App;
