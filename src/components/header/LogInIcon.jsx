/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { changeUser } from '../../store/userReducer';
import { changeLikes } from '../../store/likesReducer';

function LogInIcon() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.currentUser.userData);
  const dispatch = useDispatch();
  let email;
  // console.log(user);

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${response.access_token}`, {
        headers: {
          Authorization: response.access_token,
        },
      })
        .then((serverRes) => {
          dispatch(changeUser(serverRes.data));
          // check if the user exists within the mongoose model and put in it there if it doesn't
          return axios.get('http://localhost:4007/addUser', {
            params: {
              email: serverRes.data.email,
            },
          });
        })
        .catch((err) => console.log(err))
        .then((res) => {
          console.log(res.config.params.email);
          axios.post('http://localhost:4007/campsiteIDsByUser', {
            email: res.config.params.email,
          })
            .then((resp) => {
              console.log('test email', resp.data.campsiteIDs);
              dispatch(changeLikes(resp.data.campsiteIDs));
            });
        });
    },
  });

  function handleLogout() {
    dispatch(changeUser({}));
    dispatch(changeLikes({}));
  }

  // function getLikedSites() {
  //   axios.post('http://localhost:4007/campsiteIDsByUser', {
  //     email,
  //   })
  //     .then((res) => {
  //       console.log('test email', email);
  //       dispatch(changeLikes(res.data));
  //     });
  // }

  return (
    <div className="self-center">
      { user.name
        ? (
          <button
            type="button"
            className="sm:h-9 sm:w-25 border border-primary rounded-2xl md:py-1.5 px-2 flex items-center justify-center transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-pop"
            onClick={handleLogout}
          >
            Sign out
          </button>
        )
        : (
          <button
            type="button"
            className="sm:h-9 sm:w-25 border border-primary rounded-2xl px-2 md:py-1.5 transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-pop"
            onClick={() => login()}
          >
            Sign in 🚀
            {' '}
          </button>
        ) }
    </div>
  );
}

export default LogInIcon;
