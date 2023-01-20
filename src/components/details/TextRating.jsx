import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import ParkOutlinedIcon from '@mui/icons-material/ParkOutlined';
import ParkIcon from '@mui/icons-material/Park';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function TextRating({ rating }) {
  const value = rating;

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        icon={<ParkIcon style={{ opacity: 0.55, justify: 'right' }} fontSize="inherit" />}
        emptyIcon={<ParkOutlinedIcon style={{ opacity: 0.55, justify: 'right' }} fontSize="inherit" />}
        sx={{
          '& .MuiRating-iconFilled': {
            color: 'green',
          },
        }}
      />
      {/* <Box sx={{ ml: 2 }}>{labels[value]}</Box> */}
    </Box>
  );
}

export default TextRating;
