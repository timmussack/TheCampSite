import React from "react";
import { NavLink } from "react-router-dom";
import "../app.css";
import {useSelector, useDispatch} from "react-redux";
import {changeSample} from "../store/sampleReducer.js";
import TitleLogo from "./TitleLogo.jsx";
import LoginForm from "./LoginForm.jsx";
import SignUpForm from "./SignUpForm.jsx";

const Login = () => {

  return (
    <div className="flex flex-col font-primary w-full min-h-screen p-2">

      <div className="border-y-2 border-pop py-3 flex flex-wrap flex-row justify-around items-center">
        <NavLink
          to="/"
          >
          <TitleLogo />
        </NavLink>
      </div>

      <div className="h-[calc(100vh-110px)] overflow-auto flex flex-col mt-5 justify-center items-center space-x-5 desktop:flex-row">
        <LoginForm />
        <p className="text-2xl my-5">or</p>
        <SignUpForm />
      </div>


    </div>
  )
}

export default Login