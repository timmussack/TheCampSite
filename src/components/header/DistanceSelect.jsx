import React from 'react';

function DistanceSelect() {
  // return (
  //   <label htmlFor="distance" className="mr-2 hidden md:flex">
  //     Distance:
  // eslint-disable-next-line max-len
  //     <select id="distance" className="border-primary border rounded-2xl pl-3 h-9 w-20 mt-2 desktop:mt-0" defaultValue="any">
  //       <option value="any">Any</option>
  //       <option value="50">50</option>
  //       <option value="100">100</option>
  //       <option selected value="250">250</option>
  //       <option value="500">500</option>
  //     </select>
  //   </label>
  // );

  return (
    <div className="hidden md:flex flex flex-col">
      <p className="text-xs text-secondary">Distance</p>
      <div className="border-1 border-primary border rounded-lg desktop:mt-0 p-1">
        <label htmlFor="distance" className="mr-2 bg-neutral-50">
          <select id="distance" className="bg-neutral-50" defaultValue="any">
            <option value="any">Any</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option selected value="250">250</option>
            <option value="500">500</option>
          </select>
        </label>
      </div>
    </div>

  );
}

export default DistanceSelect;
