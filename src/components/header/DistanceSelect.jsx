import React, { useState, Fragment } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function DistanceSelect() {
  // return (
  //   <label htmlFor="distance" className="mr-2 hidden md:flex">
  //     Distance:
  // eslint-disable-next-line max-len
  //     <select id="distance" className="border-primary border rounded-2xl pl-3 h-9 w-20 mt-2 desktop:mt-0" defaultValue="any">
  //       <option value="any">Any</option>
  //       <option value="50">50</option>
  //       <option value="100">100</option>
  //       <option selected value="250">250</option>
  //       <option value="500">500</option>
  //     </select>
  //   </label>
  // );

  const [selectedDistance, setSelectedDistance] = useState('Any');
  const distances = ['Any', '50', '100', '250', '500'];

  const handleChange = (evt) => {
    setSelectedDistance(evt.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Distance</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={selectedDistance}
        label="Distance"
        onChange={(evt) => handleChange(evt)}
      >
        <MenuItem value="Any">Any</MenuItem>
        <MenuItem value="50">50</MenuItem>
        <MenuItem value="100">100</MenuItem>
        <MenuItem value="250">250</MenuItem>
        <MenuItem value="500">500</MenuItem>
      </Select>
    </FormControl>
  );
}

export default DistanceSelect;
