import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Header from '../header/Header.jsx';

function Profile() {
  // get user data from redux store
  const user = useSelector((state) => state.currentUser.userData);
  // React-router hook that allows passing state from the useNavigate hook in <ProfileIcon/>
  const location = useLocation();

  return (
    <div className="font-primary w-full min-h-screen p-2">
      <Header />
      Welcome
      {' '}
      {location.state.user.name}
      !
    </div>
  );
}

export default Profile;
