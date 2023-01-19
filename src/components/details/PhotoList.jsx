/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function PhotoList({ photos }) {
  console.log('photos from photolist', photos);
  return (
    <ImageList sx={{ width: 800, height: '100vh', mx: 'auto' }} cols={1} rowHeight={400}>
      {photos.map((photo, index) => (
        <ImageListItem key={index}>
          <img
            src={`${photo}`}
            alt=""
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default PhotoList;
