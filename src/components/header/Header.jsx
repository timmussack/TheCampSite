import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeData } from '../../store/campsitesReducer';
import SearchBar from './SearchBar.jsx';
import TitleLogo from './TitleLogo.jsx';
import DistanceSelect from './DistanceSelect.jsx';
import FilterBySelect from './FilterBySelect.jsx';
import LogInIcon from './LogInIcon.jsx';
import FilterBar from './FilterBar.jsx';
import ProfileIcon from '../profile/ProfileIcon.jsx';

const axios = require('axios');

function Header() {
  const [location, setLocation] = useState(false);
  const [radius, setRadius] = useState('N/A');
  const [filter, setFilter] = useState('N/A');
  const [coords, setCoords] = useState('N/A');
  const dispatch = useDispatch();

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
        dispatch(changeData(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="border-y-2 border-pop py-3 flex flex-wrap flex-row justify-around items-center sticky top-0 z-50 bg-neutral-50">
      <TitleLogo />
      <SearchBar setCoords={setCoords} setLocation={setLocation} />

      {/* on mobile disappears */}
      {location && <DistanceSelect setRadius={setRadius} />}

      {/* on mobile disappears */}
      <FilterBySelect setFilter={setFilter} />

      <LogInIcon />

      {/* secondary filter bar shows on mobile only */}
      <FilterBar location={location} setRadius={setRadius} setFilter={setFilter} />
      <button
        type="submit"
        onClick={() => sendToServer()}
        className="py-2 px-4 text-sm text-primary rounded-2xl border border-primary"
      >
        Search
      </button>
      <FilterBar />

      {/* only shows up if a user is logged in */}
      <ProfileIcon />
    </div>
  );
}

export default Header;
