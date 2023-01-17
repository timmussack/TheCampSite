import React from "react";
import "../app.css";
import {useSelector, useDispatch} from "react-redux";
import {changeSample} from "../store/sampleReducer.js";
import { FaUserAlt } from "react-icons/fa";


const LogInJoin = () => {

  return (
    <>
      <FaUserAlt className="cursor-pointer transform transition duration-500 hover:scale-110" size={28} onClick={() => console.log("Login Clicked!")}/>
    </>
  )
}

export default LogInJoin