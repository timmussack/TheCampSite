import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProfileCard({ campsites }) {
  // react router hook used in onClick event of card element
  const navigate = useNavigate();

  function handleKeyPress() {
    // do stuff if we want to make this accessible to people using keyboard only
  }

  return (
    <div className="flex justify-center flex-wrap">
      {campsites.map((campsite) => (
        <div
          role="button"
          tabIndex={0}
          className="flex flex-col bg-white cursor-pointer rounded-xl shadow-lg w-72 m-6 p-2 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          onClick={() => navigate(`/campsite/${campsite.id}`, { state: { campsite } })}
          onKeyPress={() => handleKeyPress()}
        >

          <img className="rounded-xl m-0" src={campsite.multimedia[0]} alt="" />

          <div className="flex flex-row justify-between mt-1">

            <h2 className="text-lg">{campsite.campsiteName}</h2>

            <p className="text-secondary">
              {campsite.averageRating}
              /5
            </p>

          </div>

          {/* <p className="text-secondary">Distance: 500 miles</p> */}

          <p className="text-secondary mt-9">
            Staff on site:
            {' '}
            {campsite.amenities.staffOrVulnteerHostOnSite}
          </p>

          <p className="text-secondary">
            Phone Number:
            {' '}
            {campsite.campsitePhone || 'Not listed'}
          </p>

          <p className="text-secondary">
            Number of sites:
            {campsite.totalSites || 10}
          </p>

        </div>
      ))}
    </div>

  );
}

export default ProfileCard;
