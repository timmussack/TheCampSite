import React from "react";
import "../app.css";
import {useSelector, useDispatch} from "react-redux";
import {changeSample} from "../store/sampleReducer.js";

const SearchBar = () => {

  return (
      <>
        <input className="border-primary border rounded-2xl pl-3 h-9 w-56 mt-2 desktop:mt-0" placeholder="Search by location..."/>
      </>
  )
}

export default SearchBar