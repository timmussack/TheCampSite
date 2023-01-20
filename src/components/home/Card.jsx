/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Modal, Typography } from '@mui/material';
import Fire from './Fire.jsx';
import FireFill from './FireFill.jsx';

const axios = require('axios');

const Card = React.forwardRef((props, ref) => {
  const { campsite } = props;

  // react router hook used in onClick event of card element
  const navigate = useNavigate();

  // get coords from google search
  const coords = useSelector((state) => state.currentCoord.coordData);
  // get location state to conditionally render distance on card
  const location = useSelector((state) => state.currentCoord.location);

  // campsite.latLong[0] & campsite.latLong[1]
  // latLong: [ -75.1727157999991, 38.1521378003843 ]

  // coords.lat & coords.long
  // loc: { lat: 42.0074879, long: -96.2497439 }

  function distance(lat1, lon1, lat2, lon2, unit) {
    console.log('lat1:', lat1, 'lon1:', lon1);
    console.log('lat2:', lat2, 'lon2:', lon2);
    if ((lat1 == lat2) && (lon1 == lon2)) {
      return 0;
    }

    const radlat1 = (Math.PI * lat1) / 180;
    const radlat2 = (Math.PI * lat2) / 180;
    const theta = lon1 - lon2;
    const radtheta = (Math.PI * theta) / 180;
    let dist = Math.sin(radlat1) * Math.sin(radlat2)
    + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == 'K') { dist *= 1.609344; }
    if (unit == 'N') { dist *= 0.8684; }
    return dist;
  }

  const miles = distance(campsite.latLong[0], campsite.latLong[1], coords['long'], coords['lat'], 'M');

  function handleKeyPress() {
    // do stuff if we want to make the card click accessible to people using keyboard only
  }

  const [liked, setLiked] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const user = useSelector((state) => state.currentUser.userData);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 250,
    bgcolor: 'background.paper',
    border: '1px solid #212121',
    borderRadius: '30px',
    boxShadow: 24,
    p: 4,
  };

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
    } else {
      handleOpen();
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
    } else {
      handleOpen();
    }
  }

  return (
    <div
      className="flex flex-col bg-white cursor-pointer rounded-xl shadow-lg max-w-90 md:w-72 my-5 mx-5 p-0 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
      ref={ref} // for inifinite scroll
    >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ fontFamily: 'Jost' }}>
            Log in to save a campsite.
          </Typography>
        </Box>
      </Modal>
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

          <p className="text-secondary">
            {campsite.averageRating}
            /5
          </p>

        </div>

        { location && (
          <p className="text-secondary p-2">
            Straight Line Distance:
            {' '}
            {Math.floor(miles)}
            {' '}
            miles
          </p>
        ) }

        <p className="text-secondary mt-9 p-2">
          Staff on site:
          {' '}
          {campsite.amenities.staffOrVulnteerHostOnSite}
        </p>

        <p className="text-secondary p-2">
          Phone Number:
          {' '}
          {campsite.campsitePhone || 'Not listed'}
        </p>

        <p className="text-secondary p-2">
          Number of sites:
          {' '}
          {campsite.totalSites || 'Not listed'}
        </p>
      </div>
    </div>
  );
});

export default Card;
