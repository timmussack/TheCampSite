import React, { useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import DistanceSelect from './DistanceSelect.jsx';
import FilterBySelect from './FilterBySelect.jsx';

function FilterBar(props) {
  const {
    setRadius, filter, setFilter, selectedDistance, setSelectedDistance,
  } = props;

  const handleChangeDistance = (evt) => {
    setSelectedDistance(evt.target.value);
    setRadius(evt.target.value);
  };
  const handleChange = (evt) => {
    setSelectedDistance(evt.target.value);
    setRadius(evt.target.value);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const location = useSelector((state) => state.currentCoord.location);

  return (

    <div className="md:hidden flex flex-row justify-center border-b-2 border-b-[#6D9886] m-1">
      {!location
      && (
        <div className="md:hidden">
          <FormControl
            sx={{ m: 1, minWidth: 120, borderRadius: '15px' }}
            size="small"
            disabled
            aria-owns={open ? 'mouse-over-popover' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <InputLabel id="demo-simple-select-small-disabled-label" sx={{ borderRadius: '15px' }}>Distance</InputLabel>
            <Select
              labelId="demo-simple-select-disabled-label-small"
              id="demo-simple-select-disabled-small"
              value={selectedDistance}
              label="Distance"
              onChange={(evt) => handleChange(evt)}
              sx={{ borderRadius: '15px', background: 'white', fontSize: '12px' }}
            >
              <MenuItem value="N/A">Any</MenuItem>
            </Select>
          </FormControl>

          {/* on hover message */}
          <Popover
            id="mouse-over-popover"
            sx={{
              pointerEvents: 'none',
              fontSize: '12px',
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <Typography sx={{ p: 1, fontSize: '12px' }}>Enter a location to sort by distance</Typography>
          </Popover>
        </div>
      )}

      {/* distance can be choosen once location has been choosen */}
      {location
    && (
      <div className="md:hidden">
        <FormControl sx={{ m: 1, minWidth: 120, borderRadius: '15px' }} size="small">
          <InputLabel id="demo-select-small" sx={{ borderRadius: '15px' }}>Distance</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={selectedDistance}
            label="Distance"
            onChange={(evt) => handleChange(evt)}
            sx={{ borderRadius: '15px', background: 'white', fontSize: '12px' }}
          >
            <MenuItem value="N/A">Any</MenuItem>
            <MenuItem value="50">50</MenuItem>
            <MenuItem value="100">100</MenuItem>
            <MenuItem value="250">250</MenuItem>
            <MenuItem value="500">500</MenuItem>
          </Select>
        </FormControl>
      </div>
    )}

      {/* <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Distance</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={selectedDistance}
          label="Distance"
          onChange={(evt) => handleChangeDistance(evt)}
          sx={{ borderRadius: '15px', background: 'white', fontSize: '12px' }}
        >
          <MenuItem value="N/A">Any</MenuItem>
          <MenuItem value="50">50</MenuItem>
          <MenuItem value="100">100</MenuItem>
          <MenuItem value="250">250</MenuItem>
          <MenuItem value="500">500</MenuItem>
        </Select>
      </FormControl> */}

      <FormControl sx={{ m: 1, minWidth: 120, borderRadius: '15px' }} size="small">
        <InputLabel id="demo-select-small" sx={{ borderRadius: '15px' }}>Sort By</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={filter}
          label="Sort By"
          onChange={(e) => setFilter(e.target.value)}
          sx={{ borderRadius: '15px', background: 'white', fontSize: '12px' }}
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
