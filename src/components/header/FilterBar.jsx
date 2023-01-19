import React from 'react';

function FilterBar({ location, setRadius, setFilter }) {
  return (
    <div className="md:hidden">
      {location && (
        <label htmlFor="distance" className="mr-2">
          Distance:
          <select id="distance" onChange={(e) => setRadius(e.target.value)} className="border-primary border rounded-2xl pl-3 h-9 w-20 mt-2 desktop:mt-0" defaultValue="any">
            <option value="N/A">Any</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="250">250</option>
            <option value="500">500</option>
          </select>
        </label>
      )}
      <label htmlFor="filter">
        Filter By:
        <select id="filter" onChange={(e) => setFilter(e.target.value)} className="border-primary border rounded-2xl pl-3 h-9 w-36 mt-2 desktop:mt-0" defaultValue="none">
          <option value="N/A">None</option>
          <option value="mostReviews">Most Reviews</option>
          <option value="highestRated">Highest Rated</option>
        </select>
      </label>
    </div>

  );
}

export default FilterBar;
