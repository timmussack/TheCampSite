import React from "react";
import "../app.css";
import {useSelector, useDispatch} from "react-redux";
import {changeSample} from "../store/sampleReducer.js";

const SelectSortBy = () => {

  return (
      <>
        <select className="border-primary border-2 rounded-2xl pl-3 h-9 w-40">
          <option value="number" selected>Most Reviews</option>
          <option value="highestAverage">Highest Average</option>
        </select>
      </>
  )
}

export default SelectSortBy