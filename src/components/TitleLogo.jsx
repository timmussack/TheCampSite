import React from "react";
import "../app.css";
import {useSelector, useDispatch} from "react-redux";
import {changeSample} from "../store/sampleReducer.js";
import { GiCampingTent } from "react-icons/gi";

const TitleLogo = () => {

  return (
    <div className="flex flex-row items-center">
      <GiCampingTent size={50}/>
      <h1 className="text-primary text-4xl font-bold">The <span className="text-pop">Camp</span>Site</h1>
    </div>
  )
}

export default TitleLogo