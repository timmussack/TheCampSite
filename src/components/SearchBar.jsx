import React from "react";
import "../app.css";
import {useSelector, useDispatch} from "react-redux";
import {changeSample} from "../store/sampleReducer.js";

const SearchBar = () => {

  return (
      <>
        <input className="border-primary border-2 rounded-2xl pl-3 h-9 w-64 mb-2" placeholder="Search by location..."/>
      </>
  )
}

export default SearchBar