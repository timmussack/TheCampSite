import React, { useState } from 'react';
import SearchBar from './SearchBar.jsx';
import TitleLogo from './TitleLogo.jsx';
import DistanceSelect from './DistanceSelect.jsx';
import FilterBySelect from './FilterBySelect.jsx';
import LogInIcon from './LogInIcon.jsx';
import FilterBar from './FilterBar.jsx';

const axios = require('axios');

function Header() {
  const [location, setLocation] = useState(false);
  const [radius, setRadius] = useState('N/A');
  const [filter, setFilter] = useState('N/A');
  const [coords, setCoords] = useState('N/A');
  const [selectedDistance, setSelectedDistance] = useState('N/A');

  function sendToServer() {
    let rating = 'N/A';
    let review = 'N/A';
    let radi = 'N/A';
    if (filter === 'highestRated') {
      rating = 'yes';
    } else if (filter === 'mostReviews') {
      review = 'yes';
    }
    if (radius !== 'N/A') {
      radi = Number(radius);
    }
    axios.post('/getFiltered', {
      rat: rating,
      rev: review,
      loc: coords,
      rad: radi,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="sticky top-0 bg-neutral-50 absolute z-50">
      <div className="border-y-2 border-pop py-3 flex flex-wrap flex-row justify-around bg-neutral-50 relative align-bottom">
        <TitleLogo />
        <SearchBar setCoords={setCoords} setLocation={setLocation} />

        {/* on mobile disappears */}
        {/* {location && <DistanceSelect setRadius={setRadius} />} */}
        <DistanceSelect
          setRadius={setRadius}
          selectedDistance={selectedDistance}
          setSelectedDistance={setSelectedDistance}
          location={location}
        />

        {/* on mobile disappears */}
        <FilterBySelect filter={filter} setFilter={setFilter} />

        <button
          type="submit"
          onClick={() => sendToServer()}
          className="h-9 w-18 border border-primary rounded-2xl px-2 py-1.5 transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-pop self-center"
        >
          Search
        </button>

        <LogInIcon />
      </div>

      {/* secondary filter bar shows on mobile only */}
      <FilterBar
        location={location}
        setRadius={setRadius}
        filter={filter}
        setFilter={setFilter}
        selectedDistance={selectedDistance}
        setSelectedDistance={setSelectedDistance}
      />
    </div>
  );
}

export default Header;
