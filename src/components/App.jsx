import React, { useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import '../app.css';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { changeData } from '../store/campsitesReducer';
import CampsiteDetails from './details/CampsiteDetails.jsx';
import Home from './home/Home.jsx';
import Login from './login/Login.jsx';
import Profile from './profile/Profile.jsx';

function App() {
  const campsites = useSelector((state) => state.campsites.data);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3007/getAllCampsites')
      .then((response) => {
        dispatch(changeData(response.data));
      });
  }, []);

  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/campsite/:id" element={<CampsiteDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
