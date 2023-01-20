import React, { useState, Fragment } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function FilterBySelect({ filter, setFilter }) {
  return (
    <div className="hidden md:flex">
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

export default FilterBySelect;
