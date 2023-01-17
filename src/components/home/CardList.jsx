import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card.jsx';

function CardList() {
  // get data from redux store
  const campsites = useSelector((state) => state.campsites.data);

  return (
    <div className="flex justify-center flex-wrap">
      {campsites.map((campsite) => (
        <Card
          key={campsite.id}
          campsite={campsite}
        />
      ))}
    </div>
  );
}

export default CardList;
