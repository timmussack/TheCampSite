import React from "react";
import { Route, Routes, Link } from "react-router-dom"
import "../app.css";
import {useSelector, useDispatch} from "react-redux";
import {changeSample} from "../store/sampleReducer.js";
import CampsiteDetails from "./CampsiteDetails.jsx";
import Home from "./Home.jsx";
import Login from "./Login.jsx";

//Sample data for card view setup
const {sampleCampsites} = require("../store/sampleData.js");

const App = () => {

  const sample = useSelector((state) => state.sample.testKey);
  const dispatch = useDispatch();

  const exclamationAdder = () => {
    // add '!' to state
    dispatch(changeSample(`${sample}!`));
  };

  return (
    <>
    <Routes>
      <Route path="/" element={<Home sampleCampsites={sampleCampsites} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/campsite/:id" element={<CampsiteDetails />} />
    </Routes>
    </>
  )
}

export default App
