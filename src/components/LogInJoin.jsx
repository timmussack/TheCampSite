import React from "react";
import "../app.css";
import {useSelector, useDispatch} from "react-redux";
import {changeSample} from "../store/sampleReducer.js";
import { FaUserAlt } from "react-icons/fa";

const LogInJoin = () => {

  return (
      <>
        <button className="flex-end h-9 w-30"> <FaUserAlt className="mr-2.5 mt-1" size={28}/> </button>
      </>
  )
}

export default LogInJoin