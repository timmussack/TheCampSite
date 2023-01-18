import React, { useEffect, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function LogInIcon() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  // console.log(user);

  // const login = useGoogleLogin({
  //   onSuccess: async (response) => {
  //     axios.get('http://localhost:4007/googleaccess', {
  //       access_token: response.access_token,
  //     });
  //   },
  // });
  const login = () => {

  };

  return (
    <div>
      <button type="button" onClick={() => login()}>
        Sign in with Google 🚀
        {' '}
      </button>
      ;
    </div>
  );
}

export default LogInIcon;
