import React from "react";
import "../app.css";
import {useSelector, useDispatch} from "react-redux";
import {changeSample} from "../store/sampleReducer.js";

const DistanceSelect = () => {

  return (
      <label className="mr-2">
        Distance:
        <select className="border-primary border rounded-2xl pl-3 h-9 w-20 mt-2 desktop:mt-0" defaultValue="any">
          <option value="any">Any</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option selected value="250">250</option>
          <option value="500">500</option>
        </select>
      </label>
  )
}

export default DistanceSelect