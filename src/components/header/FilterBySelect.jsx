import React, { useState, Fragment } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function FilterBySelect({ filter, setFilter }) {
  return (
  // <label htmlFor="filter" className="hidden md:flex">
  //   Filter By:
  // eslint-disable-next-line max-len
  //   <select id="filter" onChange={(e) => setFilter(e.target.value)} className="border-primary border rounded-2xl pl-3 h-9 w-36 mt-2 desktop:mt-0" defaultValue="none">
  //     <option value="N/A">None</option>
  //     <option value="mostReviews">Most Reviews</option>
  //     <option value="highestRated">Highest Rated</option>
  //   </select>
  // </label>

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
  );
}

export default FilterBySelect;
