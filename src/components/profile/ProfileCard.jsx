import React, { useEffect, useState } from 'react';
import { useNavigate, useSelector } from 'react-router-dom';
import axios from 'axios';
import { Box, Modal, Typography } from '@mui/material';
import Fire from '../home/Fire.jsx';
import FireFill from '../home/FireFill.jsx';

function ProfileCard({ campsite }) {
  const [liked, setLiked] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const user = useSelector((state) => state.currentUser.userData);
  // react router hook used in onClick event of card element
  const navigate = useNavigate();

  function handleKeyPress() {
    // do stuff if we want to make this accessible to people using keyboard only
  }

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
      className="flex flex-col bg-white cursor-pointer rounded-xl shadow-lg max-w-90 md:w-72 m-6 p-0 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
    >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ fontFamily: 'Jost' }}>
            Log in to save a campsite
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

        {/* <p className="text-secondary p-2">Distance: 500 miles</p> */}

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
}

export default ProfileCard;
