import React from 'react';
import '../app.css';
import { GiCampingTent } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

function TitleLogo() {
  return (
    <NavLink
      to="/"
    >
      <div className="flex flex-row items-center cursor-pointer">
        <GiCampingTent size={50} />
        <h1 className="text-primary text-4xl font-bold">
          The
          <span className="text-pop">Camp</span>
          Site
        </h1>
      </div>
    </NavLink>

  );
}

export default TitleLogo;
