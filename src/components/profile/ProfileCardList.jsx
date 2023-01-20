import React, { useEffect, useState } from 'react';
import { useNavigate, useSelector } from 'react-router-dom';
import ProfileCard from './ProfileCard.jsx';

function ProfileCardList({ campsites }) {
  // react router hook used in onClick event of card element
  const navigate = useNavigate();

  function handleKeyPress() {
    // do stuff if we want to make this accessible to people using keyboard only
  }

  return (
    <div className="flex flex-wrap justify-center">
      {campsites.map((campsite) => (
        <ProfileCard key={campsite.id} campsite={campsite} />
      ))}
    </div>
  );
}

export default ProfileCardList;
