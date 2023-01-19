import React from 'react';
import SearchBar from './SearchBar.jsx';
import TitleLogo from './TitleLogo.jsx';
import DistanceSelect from './DistanceSelect.jsx';
import FilterBySelect from './FilterBySelect.jsx';
import LogInIcon from './LogInIcon.jsx';
import FilterBar from './FilterBar.jsx';
import ProfileIcon from '../profile/ProfileIcon.jsx';

function Header() {
  return (
    <div className="border-y-2 border-pop py-3 flex flex-wrap flex-row justify-around items-center sticky top-0 z-50 bg-neutral-50">
      <TitleLogo />
      <SearchBar />

      {/* on mobile disappears */}
      <DistanceSelect />

      {/* on mobile disappears */}
      <FilterBySelect />

      <LogInIcon />

      {/* secondary filter bar shows on mobile only */}
      <FilterBar />

      {/* only shows up if a user is logged in */}
      <ProfileIcon />
    </div>
  );
}

export default Header;
