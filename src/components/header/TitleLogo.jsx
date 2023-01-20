/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { GiCampingTent } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { changeData } from '../../store/campsitesReducer';

function TitleLogo() {
  const dispatch = useDispatch();

  function handleClick() {
    axios.get('http://localhost:4007/getAllCampsites')
      .then((response) => {
        dispatch(changeData(response.data));
      });
  }

  return (
    <NavLink
      to="/"
    >
      <div
        className="flex flex-row items-center cursor-pointer"
        onClick={handleClick}
      >
        <GiCampingTent size={50} />
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
