import React from "react";
import "../app.css";
import {useSelector, useDispatch} from "react-redux";
import {changeSample} from "../store/sampleReducer.js";
import CardList from "./CardList.jsx";
import Header from "./Header.jsx";

const Home = ( { sampleCampsites } ) => {

  return (
    <div className="font-primary w-full min-h-screen p-2">
      <Header/>
      <CardList sampleCampsites={sampleCampsites}/>
    </div>
  )
}

export default Home