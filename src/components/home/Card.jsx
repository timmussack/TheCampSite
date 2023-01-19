import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Fire from './Fire.jsx';
import FireFill from './FireFill.jsx';

const axios = require('axios');

const Card = React.forwardRef((props, ref) => {
  // react router hook used in onClick event of card element
  const navigate = useNavigate();

  function handleKeyPress() {
    // do stuff if we want to make this accessible to people using keyboard only
  }

  const { campsite } = props;

  const [liked, setLiked] = useState(false);
  const user = useSelector((state) => state.currentUser.userData);

  function like() {
    if (user.email) {
      setLiked(!liked);
      axios.put('/favorite', {
        email: user.email,
        campsite: campsite.id,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function unlike() {
    if (user.email) {
      setLiked(!liked);
      axios.put('/unfavorite', {
        email: user.email,
        campsite: campsite.id,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      className="flex flex-col bg-white cursor-pointer rounded-xl shadow-lg max-w-90 md:w-72 m-6 p-0 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
      // onClick={() => navigate(`/campsite/${campsite.id}`, { state: { campsite } })}
      onKeyPress={() => handleKeyPress()}
      ref={ref} // for inifinite scroll
    >
      <div className="relative">
        <img className="p-0 m-0 rounded-xl w-full" src={campsite.multimedia[0]} alt="" />
        {!liked && (
          <button type="button" className="top-0 right-0 absolute m-2" onClick={() => like()}>
            <Fire />
          </button>
        )}
        {liked && (
          <button type="button" style={{ color: '#FF5F1F' }} className="top-0 right-0 absolute m-2" onClick={() => unlike()}>
            <FireFill />
          </button>
        )}

      </div>
      <div onClick={() => navigate(`/campsite/${campsite.id}`, { state: { campsite } })} role="button" onKeyPress={() => handleKeyPress()} tabIndex={0}>
        <div className="flex flex-row justify-between mt-1 p-2">

          <h2 className="text-base">{campsite.campsiteName}</h2>

          <p className="text-secondary">Reviews</p>

        </div>

        <p className="text-secondary p-2">Distance: 500 miles</p>

        <p className="text-secondary mt-9 p-2">
          Staff on site:
          {campsite.amenities.stafforVolunteerHostOnSite === true ? 'Yes' : 'No'}
        </p>

        <p className="text-secondary p-2">
          Phone:
          {campsite.campsitePhone}
        </p>

        <p className="text-secondary p-2">
          Number of sites:
          {campsite.totalSites}
        </p>
      </div>
    </div>
  );
});

export default Card;
