import React from "react";
import '../app.css';
import {useSelector, useDispatch} from "react-redux";
import {changeSample} from '../store/sampleReducer.js';
import CardList from './CardList.jsx';
//Sample data for card view setup
const {sampleCampsites} = require("../store/sampleData.js");

const App = () => {
  const sample = useSelector((state) => state.sample.testKey);
  const dispatch = useDispatch()

  const exclamationAdder = (e) => {
    // add '!' to state
    dispatch(changeSample(sample + '!'))
  }

  return (
    <div className="font-primary w-full min-h-screen p-6">
      <h1 className="text-primary text-4xl font-bold">The <span className="text-pop">Camp</span>Site</h1>
      <div className="">{sample}</div>
      <button
        className=""
        onClick={exclamationAdder}>
          Click to add exclamation
      </button>
      <CardList sampleCampsites={sampleCampsites}/>
    </div>
  )
}

export default App