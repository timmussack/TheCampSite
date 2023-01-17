import React from "react";
import "../app.css";
import {useSelector, useDispatch} from "react-redux";
import {changeSample} from "../store/sampleReducer.js";

const FilterBySelect = () => {

  return (
      <label>
        Filter By:
        <select className="border-primary border rounded-2xl pl-3 h-9 w-36 mt-2 desktop:mt-0" defaultValue="none">
          <option value="none" selected>None</option>
          <option value="mostReviews" selected>Most Reviews</option>
          <option value="highestRated">Highest Rated</option>
        </select>
      </label>
  )
}

export default FilterBySelect