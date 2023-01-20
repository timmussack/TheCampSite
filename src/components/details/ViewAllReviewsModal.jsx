import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ReviewCard from './ReviewCard.jsx';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: '100vh',
  bgcolor: 'grey',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ViewAllReviewsModal({ reviews }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(false);
  if (reviews.length === 0) {
    // console.log('..returning from review card reviews is empty');
  } else {
    const reviewCards = reviews.map((review, index) => <ReviewCard key={index} review={review} />);
    console.log('review cards from modal', reviewCards);
    return (
      <div className="flex flex-col font-primary">
        <Button sx={{ mx: 'auto' }} onClick={handleOpen}>View All Reviews</Button>
        <div>{open && reviewCards}</div>
      </div>
    );
  }
}
export default ViewAllReviewsModal;
