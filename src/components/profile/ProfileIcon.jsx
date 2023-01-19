/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProfileIcon() {
  // get user data from redux store
  const user = useSelector((state) => state.currentUser.userData);
  const navigate = useNavigate();

  return (
    <FaUserAlt size={20} onClick={() => navigate('/profile', { state: { user } })} />
  );
}

export default ProfileIcon;
