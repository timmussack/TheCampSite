import React from 'react';

function DistanceSelect() {
  return (
    <label htmlFor="distance" className="mr-2">
      Distance:
      <select id="distance" className="border-primary border rounded-2xl pl-3 h-9 w-20 mt-2 desktop:mt-0" defaultValue="any">
        <option value="any">Any</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="250">250</option>
        <option value="500">500</option>
      </select>
    </label>
  );
}

export default DistanceSelect;
