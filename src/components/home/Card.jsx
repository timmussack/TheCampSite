/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Box, Modal, Typography, Rating,
} from '@mui/material';
import ParkOutlinedIcon from '@mui/icons-material/ParkOutlined';
import ParkIcon from '@mui/icons-material/Park';
import { changeLikes, addLike, unliked } from '../../store/likesReducer.js';
import Fire from './Fire.jsx';
import FireFill from './FireFill.jsx';

const axios = require('axios');

const Card = React.forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const { campsite } = props;

  // react router hook used in onClick event of card element
  const navigate = useNavigate();

  // get coords from google search
  const coords = useSelector((state) => state.currentCoord.coordData);
  // get location state to conditionally render distance on card
  const location = useSelector((state) => state.currentCoord.location);
  // get likes state to conditionally render likes on card
  const likes = useSelector((state) => state.likes.userLikes);

  function distance(lat1, lon1, lat2, lon2, unit) {
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

  useEffect(() => {
    if (user.email) {
      if (likes.includes(campsite.id)) {
        setLiked(true);
      }
    } else {
      setLiked(false);
    }
  }, [likes]);

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
      // likes.push(campsite.id);
      dispatch(addLike(campsite.id));
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
      console.log(campsite.id);
      const index = likes.indexOf(campsite.id);
      console.log('index', index);
      console.log('array', likes);
      dispatch(unliked(index));
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

          <Box
            sx={{
              width: 90,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Rating
              name="text-feedback"
              size="small"
              value={campsite.averageRating}
              readOnly
              precision={0.5}
              icon={<ParkIcon style={{ opacity: 0.55, justify: 'right' }} fontSize="inherit" />}
              emptyIcon={<ParkOutlinedIcon style={{ opacity: 0.55, justify: 'right' }} fontSize="inherit" />}
              sx={{
                '& .MuiRating-iconFilled': {
                  color: 'green',
                },
              }}
            />
          </Box>

        </div>

        { location && (
          <p className="text-secondary p-2">
            Distance:
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
