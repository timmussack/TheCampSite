import React, { useEffect, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { changeUser } from '../../store/userReducer';

function LogInIcon() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.currentUser.userData);
  const dispatch = useDispatch();
  // console.log(user);

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${response.access_token}`, {
        headers: {
          Authorization: response.access_token,
        },
      })
        .then((serverRes) => {
          console.log(serverRes.data);
          dispatch(changeUser(serverRes.data));
        });
    },
  });

  function handleLogout() {
    dispatch(changeUser({}));
  }

  return (
    <div>
      { user.name ? <button type="button" className="w-[160px] h-[24px] border border-black rounded-2xl py-4 px-2 flex items-center justify-center" onClick={handleLogout}>Sign out</button> : (
        <button type="button" className="border border-black rounded-2xl px-2 py-1.5" onClick={() => login()}>
          Sign in with Google 🚀
          {' '}
        </button>
      ) }
    </div>
  );
}

export default LogInIcon;
