/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import Photo from './Photo.jsx';

function CampsitePhotos({ photos }) {
  console.log('Photos from cs photos', photos);
  // const [ , ] = useState( );

  // useEffect(() => {

  // }, [])

  return (
    <div className="flex w-screen">
      {/* eslint-disable-next-line react/no-array-index-key */}
      {photos.map((photo, index) => (
        <Photo
          className="flex flex-wrap object-scale-down"
          key={index}
          photo={photo}
        />
      ))}
    </div>
  );
}

export default CampsitePhotos;
