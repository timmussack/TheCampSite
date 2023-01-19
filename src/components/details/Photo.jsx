import React, { useState, useEffect } from 'react';

function Photo({ photo, index }) {
  return (
    <img className="mr-auto ml-auto rounded-sm" src={`${photo}`} alt="" />
  );
}

export default Photo;
