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
    <div className="border-y-2 border-pop py-2">
      <div className="flex flex-row justify-around  content-center">
        <TitleLogo />
        <LogInJoin />
      </div>

      <div className="flex flex-col p-4 justify-center">
        <SearchBar />
        <SelectDistance />
        <SelectSortBy />
      </div>
    </div>
  )
}

export default Header