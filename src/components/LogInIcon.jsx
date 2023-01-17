import React from 'react';
import '../app.css';
import { FaUserAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function LogInIcon() {
  const navigate = useNavigate();

  return (
    <FaUserAlt className="cursor-pointer transform transition duration-500 hover:scale-110" size={28} onClick={() => navigate('/login')} />
  );
}

export default LogInIcon;
