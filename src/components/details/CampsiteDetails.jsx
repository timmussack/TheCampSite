import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import Header from '../header/Header.jsx';
import ReviewModal from '../reviews/ReviewModal.jsx';
import CampsitePhotos from './CampsitePhotos.jsx';
import SimpleAccordion from './SimpleAccordion.jsx';
import TextRating from './TextRating.jsx';
import PhotoModal from './PhotoModal.jsx';

function CampsiteDetails() {
  // react router hook for dynamic routing
  const { id } = useParams();
  // React-router hook that allows passing state from the useNavigate hook in <Card/>
  const location = useLocation();
  const { campsite } = location.state;
  console.log(campsite.multimedia);

  return (
    <div className="font-primary w-full min-h-screen p-2">
      <Header />
      <div className="mr-auto ml-auto max-w-screen-lg">
        <div className="flex flex-col">
          <h2>{campsite.campsiteName}</h2>
          <h3>{`${campsite.address.line1}, ${campsite.address.city},  ${campsite.address.postalCode}`}</h3>
        </div>
        <TextRating rating={campsite.averageRating} />
        {/* <CampsitePhotos photos={campsite.multimedia} /> */}
        <PhotoModal photos={campsite.multimedia} />
        <SimpleAccordion campsite={campsite} />

        <ReviewModal
          campsite={{
            name: location.state.campsite.campsiteName,
            id: location.state.campsite.id,
          }}
        />
      </div>

      {/* <h2>{campsite.campsiteName}</h2>
      <p>{campsite.averageRating}</p>
      <CampsitePhotos photos={campsite.multimedia} />
      <h1>
        Campsite details page for campsite id:
        {id}
      </h1>
      <p>{campsite.description}</p>

      <ReviewModal
        campsite={{ name: location.state.campsite.campsiteName, id: location.state.campsite.id }}
      /> */}
    </div>
  );
}

export default CampsiteDetails;
