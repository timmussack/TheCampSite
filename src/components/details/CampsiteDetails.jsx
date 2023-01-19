import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import Header from '../header/Header.jsx';
import ReviewModal from '../reviews/ReviewModal.jsx';

function CampsiteDetails() {
  // react router hook for dynamic routing
  const { id } = useParams();
  // React-router hook that allows passing state from the useNavigate hook in <Card/>
  const location = useLocation();

  return (
    <div className="font-primary w-full min-h-screen p-2">
      <Header />
      <h1>
        Campsite details page for campsite id:
        {id}
      </h1>
      <p>{location.state.campsite.campsiteName}</p>
      <p>{location.state.campsite.description}</p>
      <p>{location.state.campsite.averageRating}</p>
      <ReviewModal
        campsite={{ name: location.state.campsite.campsiteName, id: location.state.campsite.id }}
      />
    </div>
  );
}

export default CampsiteDetails;
