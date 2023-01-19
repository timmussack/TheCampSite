import React from 'react';

function FilterBySelect() {
  return (
    <label htmlFor="filter" className="hidden md:flex">
      Filter By:
      <select id="filter" className="border-primary border rounded-2xl pl-3 h-9 w-36 mt-2 desktop:mt-0" defaultValue="none">
        <option value="none">None</option>
        <option value="mostReviews">Most Reviews</option>
        <option value="highestRated">Highest Rated</option>
      </select>
    </label>
  );
}

export default FilterBySelect;
