/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import Photo from './Photo.jsx';

function CampsitePhotos({ photos }) {
  console.log('Photos from cs photos', photos);
  // const [ , ] = useState( );

  // useEffect(() => {

  // }, [])

  return (
    <div className="flex w-12/12 mr-auto ml-auto center-center">
      {/* eslint-disable-next-line react/no-array-index-key */}
      {photos.map((photo, index) => {
        if (index === 0) {
          return (
            <Photo
              key={index}
              photo={photo}
            />
          );
        }
      })}
    </div>
  );
}

export default CampsitePhotos;
