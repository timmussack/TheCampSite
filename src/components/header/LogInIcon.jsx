import React, { useEffect, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

function LogInIcon() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  console.log(user);

  function handleCallbackResponse(response) {
    console.log(jwt_decode(response.credential));
    setUser(jwt_decode(response.credential));
  }

  function handleButtonClick() {
    setUser({});
  }

  useEffect(() => {
    /* global google from script tag in index */
    google.accounts.id.initialize({
      client_id: '995989545965-ca7jae8mdka93jd7pj9f6v553onf846p.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      { theme: 'outline', shape: 'pill', size: 'large' },
    );
  }, []);

  return (
    <div className="border-primary border rounded-full">
      <button
        type="button"
        onClick={handleButtonClick}
        className={`h-[40px] w-[235px] px-[2px] py-[10px] ${user.name ? '' : 'hidden'}`}
        id="signOutButton"
      >
        Logout
      </button>
      <div id="signInDiv" className={user.name ? 'hidden' : ''} />
    </div>
  );
}

export default LogInIcon;
