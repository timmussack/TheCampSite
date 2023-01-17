import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import '../app.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeSample } from '../store/sampleReducer.js';
import CampsiteDetails from './CampsiteDetails.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';

function App() {
  const campsites = useSelector((state) => state.campsites.data);

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
      <Route path="/" index element={<Home campsites={campsites} />} />
      <Route path="/campsite/:id" element={<CampsiteDetails campsites={campsites} />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
