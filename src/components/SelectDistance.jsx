import React from "react";
import "../app.css";
import {useSelector, useDispatch} from "react-redux";
import {changeSample} from "../store/sampleReducer.js";

const SelectDistance = () => {

  return (
      <>
        <select className="border-primary border-2 rounded-2xl pl-3 h-9 w-20 mb-2">
          <option value="50">50</option>
          <option value="100">100</option>
          <option selected value="250">250</option>
          <option value="500">500</option>
          <option value="1000">1000</option>
        </select>
      </>
  )
}

export default SelectDistance