import React from 'react';
import '../app.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from './Header.jsx';

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
      <p>{campsite.campsiteName}</p>
      <p>{campsite.description}</p>
    </div>
  );
}

export default CampsiteDetails;
