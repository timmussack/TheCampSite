import React, { useState, Fragment } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function FilterBar(props) {
  const {
    location, setRadius, filter, setFilter, selectedDistance, setSelectedDistance,
  } = props;

  const handleChangeDistance = (evt) => {
    setSelectedDistance(evt.target.value);
    setRadius(evt.target.value);
  };
  return (

    <div className="md:hidden mt-5 transition-all duration-150 flex flex-row justify-center border-b-2 border-b-[#6D9886]" id="navbar">

      <FormControl
        sx={{
          m: 1, minWidth: 120, borderRadius: '15px', maxHeight: '10px',
        }}
        size="small"
      >
        <InputLabel id="demo-select-small" sx={{ borderRadius: '15px' }}>Distance</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={selectedDistance}
          label="Distance"
          onChange={(evt) => handleChangeDistance(evt)}
          sx={{ borderRadius: '15px', background: 'white' }}
        >
          <MenuItem value="N/A">Any</MenuItem>
          <MenuItem value="50">50</MenuItem>
          <MenuItem value="100">100</MenuItem>
          <MenuItem value="250">250</MenuItem>
          <MenuItem value="500">500</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120, borderRadius: '15px' }} size="small">
        <InputLabel id="demo-select-small" sx={{ borderRadius: '15px' }}>Sort By</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={filter}
          label="Sort By"
          onChange={(e) => setFilter(e.target.value)}
          sx={{ borderRadius: '15px', background: 'white' }}
        >
          <MenuItem value="N/A">Default</MenuItem>
          <MenuItem value="mostReviews">Number of Reviews</MenuItem>
          <MenuItem value="highestRated">Rating</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default FilterBar;
