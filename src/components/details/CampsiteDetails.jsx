import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../header/Header.jsx';
import ReviewModal from '../reviews/ReviewModal.jsx';

function CampsiteDetails() {
  // get data from redux store
  const campsites = useSelector((state) => state.campsites.data);
  // react router hook for dynamic routing
  const { id } = useParams();
  // matching id to the id in our campsites data, similar to passing props
  const campsite = campsites.find((item) => String(item.id) === id);

  return (
    <div className="font-primary w-full min-h-screen p-2">
      <Header />
      <h1>
        Campsite details page for campsite id:
        {id}
      </h1>
      <p>{campsite.name}</p>
      <p>{campsite.description}</p>
      <ReviewModal />
    </div>
  );
}

export default CampsiteDetails;
