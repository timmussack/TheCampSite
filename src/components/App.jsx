import React, { useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import '../app.css';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { changeSample } from '../store/sampleReducer';
import { changeData } from '../store/campsitesReducer';
import CampsiteDetails from './details/CampsiteDetails.jsx';
import Home from './home/Home.jsx';
import Login from './login/Login.jsx';

function App() {
  // Example using redux
  const sample = useSelector((state) => state.sample.testKey);
  const campsitesData = useSelector((state) => state.campsites.data);
  const dispatch = useDispatch();
  // Example using redux
  const exclamationAdder = (e) => {
    // add '!' to state
    dispatch(changeSample(`${sample}!`));
  };

  console.log(campsitesData);

  useEffect(() => {
    axios.get('http://localhost:4007/getAllCampsites')
      .then((response) => {
        console.log(response);
        dispatch(changeData(response.data));
        console.log(campsitesData);
      });
  }, []);

  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/campsite/:id" element={<CampsiteDetails />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
