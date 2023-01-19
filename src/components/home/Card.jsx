import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Card = React.forwardRef((props, ref) => {
  // react router hook used in onClick event of card element
  const navigate = useNavigate();

  function handleKeyPress() {
    // do stuff if we want to make this accessible to people using keyboard only
  }

  const { campsite } = props;

  return (
    <div
      role="button"
      tabIndex={0}
      className="flex flex-col bg-white cursor-pointer rounded-xl shadow-lg w-72 m-6 p-2 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
      onClick={() => navigate(`/campsite/${campsite.id}`, { state: { campsite } })}
      onKeyPress={() => handleKeyPress()}
      ref={ref} // for inifinite scroll
    >

      <img className="rounded-xl m-0" src={campsite.multimedia[0]} alt="" />

      <div className="flex flex-row justify-between mt-1">

        <h2 className="text-xl">{campsite.campsiteName}</h2>

        <p className="text-secondary">Reviews</p>

      </div>

      <p className="text-secondary">Distance: 500 miles</p>

      <p className="text-secondary mt-9">
        Staff on site:
        {campsite.amenities.stafforVolunteerHostOnSite === true ? 'Yes' : 'No'}
      </p>

      <p className="text-secondary">
        Phone:
        {campsite.campsitePhone}
      </p>

      <p className="text-secondary">
        Number of sites:
        {campsite.totalSites}
      </p>

    </div>
  );
});

export default Card;
