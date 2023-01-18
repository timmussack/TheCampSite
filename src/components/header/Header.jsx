import React from 'react';
import SearchBar from './SearchBar.jsx';
import TitleLogo from './TitleLogo.jsx';
import DistanceSelect from './DistanceSelect.jsx';
import FilterBySelect from './FilterBySelect.jsx';
import LogInIcon from './LogInIcon.jsx';

function Header() {
  return (
    <div className="border-y-2 border-pop py-3 flex flex-wrap flex-row justify-around items-center">
      <TitleLogo />
      <SearchBar />
      <DistanceSelect />
      <FilterBySelect />
      <LogInIcon />
    </div>
  );
}

export default Header;
