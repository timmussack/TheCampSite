import React from "react";
import "../app.css";
import {useSelector, useDispatch} from "react-redux";
import {changeSample} from "../store/sampleReducer.js";
import {useParams} from "react-router-dom";

const CampsiteDetails = () => {
  const {id} = useParams();

  return (
    <div className="">
      <h1>Campsite details page for campsite id: {id}</h1>
    </div>
  )
}

export default CampsiteDetails