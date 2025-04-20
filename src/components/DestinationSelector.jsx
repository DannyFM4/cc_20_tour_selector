import React from 'react';

const DestinationSelector = ({ tours, selectedName, setSelectedName }) => {
    // Extract unique tour names for the dropdown
    const tourNames = ['All', ...new Set(tours.map((tour) => tour.name))];

    return (
        <div className="destination-selector">
            <label htmlFor="tour-selector">Filter by Tour:</label>
            <select
                id="tour-selector"
                value={selectedName}
                onChange={(e) => setSelectedName(e.target.value)}
            >
                {tourNames.map((name, index) => (
                    <option key={index} value={name}>
                        {name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DestinationSelector;