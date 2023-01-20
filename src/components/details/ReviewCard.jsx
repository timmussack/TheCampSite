import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextRating from './TextRating.jsx';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
function ReviewCard({ review }) {
  // console.log('reviews from review card', review);
  return (
    <div className="flex flex-col border border-primary p-2">
      <h1>{review.userName}</h1>
      <div>
        <TextRating rating={review.rating} />
      </div>
      <h5>{review.description}</h5>
    </div>
  );
}
export default ReviewCard;
