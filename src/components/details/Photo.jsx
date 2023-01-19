import React, { useState, useEffect } from 'react';

function Photo({ photo, index }) {
  // const [ , ] = useState( );

  // useEffect(() => {

  // }, [])

  return (
    <img src={`${photo}`} alt="" />
  );
}

export default Photo;
