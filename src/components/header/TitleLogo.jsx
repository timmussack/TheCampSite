import React from 'react';
import { GiCampingTent } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

function TitleLogo() {
  return (
    <NavLink
      to="/"
    >
      <div className="flex flex-row items-center cursor-pointer">

        {/* smaller icon for mobile */}
        <div className="sm:hidden">
          <GiCampingTent size={35} />
        </div>

        {/* larger icon for desktop */}
        <div className="hidden sm:block">
          <GiCampingTent size={50} />
        </div>
        <h1 className="text-primary text-4xl font-bold hidden lg:flex">
          The
          <span className="text-pop">Camp</span>
          Site
        </h1>
      </div>
    </NavLink>

  );
}

export default TitleLogo;
