import React, { useState, useEffect } from 'react';

function Photo({ photo, index }) {
  return (
    <img className="mr-auto ml-auto rounded-xl shadow-lg my-2 p-0 transform transition duration-500 hover:scale-105 hover:shadow-2xl" src={`${photo}`} alt="" />
  );
}

export default Photo;
