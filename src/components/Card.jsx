import React from "react";
import "../app.css";
import {useSelector, useDispatch} from "react-redux";
import {changeSample} from "../store/sampleReducer.js";

const Card = ({ campsite }) => {

  return (
      <div className="flex flex-col bg-white rounded-xl shadow-lg w-72 m-6 p-2 transform transition duration-500 hover:scale-105">

        <img className="rounded-xl m-0" src={campsite.multimedia.photos[0]}/>

        <div className="flex flex-row justify-between mt-1">

          <h2 className="text-xl">{campsite.campsiteName}</h2>

          <p className="text-secondary">Reviews</p>

        </div>

        <p className="text-secondary">Distance: 500 miles</p>

        <p className="text-secondary mt-9">Staff on site: {campsite.amenities.stafforVolunteerHostOnSite === true ? "Yes" : "No"}</p>

        <p className="text-secondary">Phone: {campsite.campsitePhone}</p>

        <p className="text-secondary">Number of sites: {campsite.totalSites}</p>

      </div>
  )
}

export default Card