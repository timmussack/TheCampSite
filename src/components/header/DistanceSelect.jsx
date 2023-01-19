import React, { useState, Fragment } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function DistanceSelect({ setRadius, selectedDistance, setSelectedDistance }) {
  const handleChange = (evt) => {
    setSelectedDistance(evt.target.value);
    setRadius(evt.target.value);
  };

  return (
    <div className="hidden md:flex">
      <FormControl sx={{ m: 1, minWidth: 120, borderRadius: '15px' }} size="small">
        <InputLabel id="demo-select-small" sx={{ borderRadius: '15px' }}>Distance</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={selectedDistance}
          label="Distance"
          onChange={(evt) => handleChange(evt)}
          sx={{ borderRadius: '15px', background: 'white' }}
        >
          <MenuItem value="N/A">Any</MenuItem>
          <MenuItem value="50">50</MenuItem>
          <MenuItem value="100">100</MenuItem>
          <MenuItem value="250">250</MenuItem>
          <MenuItem value="500">500</MenuItem>
        </Select>
      </FormControl>
    </div>

  );
}

export default DistanceSelect;
