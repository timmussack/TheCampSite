import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from '../header/Header.jsx';
import ProfileCardList from './ProfileCardList.jsx';

function Profile() {
  const [campsites, setCampsites] = useState([]);
  // get user data from redux store
  const user = useSelector((state) => state.currentUser.userData);
  // React-router hook that allows passing state from the useNavigate hook in <ProfileIcon/>
  const location = useLocation();

  useEffect(() => {
    axios.post('http://localhost:4007/getCampsitesByUser', {
      email: user.email,
    })
      .then((response) => {
        // console.log(response.data);
        setCampsites(response.data);
      })
      .catch((error) => {
        console.log(error, 'Error in profile get request');
      });
  }, []);

  return (
    <div className="font-primary w-full min-h-screen">
      <Header />
      <h4 className="my-3 font-bold p-2 text-center">
        Welcome
        {' '}
        {location.state.user.name}
        !
      </h4>

      {campsites && <ProfileCardList campsites={campsites} />}
    </div>
  );
}

export default Profile;
