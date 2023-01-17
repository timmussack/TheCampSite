import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import '../app.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeSample } from '../store/sampleReducer.js';
import CampsiteDetails from './details/CampsiteDetails.jsx';
import Home from './home/Home.jsx';
import Login from './login/Login.jsx';

function App() {
  // Example using redux
  const sample = useSelector((state) => state.sample.testKey);
  const dispatch = useDispatch();
  // Example using redux
  const exclamationAdder = (e) => {
    // add '!' to state
    dispatch(changeSample(`${sample}!`));
  };

  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/campsite/:id" element={<CampsiteDetails />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
