import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function LogInIcon() {
  const navigate = useNavigate();

  return (
    <button className="cursor-pointer transform transition duration-500 hover:scale-110 mr-3" type="button" onClick={() => navigate('/login')}>
      <div className="flex flex-direction: row">
        <FaUserAlt size={20} />
        <p className="ml-1">Log in or Sign up</p>
      </div>
    </button>

  );
}

export default LogInIcon;
