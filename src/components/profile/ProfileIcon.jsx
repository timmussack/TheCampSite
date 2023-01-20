/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { FaUserAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProfileIcon() {
  // get user data from redux store
  const user = useSelector((state) => state.currentUser.userData);
  const navigate = useNavigate();

  return (
    <div className="cursor-pointer">
      {/* {user.name && <FaUserAlt size={20} onClick={() => navigate('/profile', { state: { user } })} /> } */}
      {user.name && <Avatar alt="/broken-image.jpg" srcSet={user.picture} onClick={() => navigate('/profile', { state: { user } })} /> }
    </div>
  );
}

export default ProfileIcon;
