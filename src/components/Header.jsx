import React from "react";
import "../app.css";
import {useSelector, useDispatch} from "react-redux";
import {changeSample} from "../store/sampleReducer.js";
import SearchBar from "./SearchBar.jsx";
import TitleLogo from "./TitleLogo.jsx";
import SelectDistance from "./SelectDistance.jsx";
import SelectSortBy from "./SelectSortBy.jsx";
import LogInJoin from "./LogInJoin.jsx";


const Header = () => {

  return (
    <div className="border-y-2 border-pop py-3 flex flex-wrap flex-row justify-around items-center">
      <TitleLogo />
      <LogInJoin />
      <SearchBar />
      <SelectDistance />
      <SelectSortBy />
    </div>
  )
}

export default Header