import React from "react";
import "../app.css";
import {useSelector, useDispatch} from "react-redux";
import {changeSample} from "../store/sampleReducer.js";
import Card from "./Card.jsx";

const CardList = ({ sampleCampsites }) => {

  return (
    <div className="flex justify-center flex-wrap">
    {sampleCampsites.map(campsite =>
      <Card
        campsite={campsite}
      />
    )}
    </div>
  )
}

export default CardList