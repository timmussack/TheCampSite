import React, { useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

function DistanceSelect({ setRadius, selectedDistance, setSelectedDistance }) {
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
    <div>

      {/* select menu is disabled until location is entered */}
      {!location
      && (
        <div className="hidden md:flex">
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
              sx={{ borderRadius: '15px', background: 'white' }}
            >
              <MenuItem value="N/A">Any</MenuItem>
            </Select>
          </FormControl>

          {/* on hover message */}
          <Popover
            id="mouse-over-popover"
            sx={{
              pointerEvents: 'none',
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
            <Typography sx={{ p: 1 }}>Enter a location to sort by distance</Typography>
          </Popover>
        </div>
      )}

      {/* distance can be choosen once location has been choosen */}
      {location
    && (
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
    )}
    </div>

  );
}

export default DistanceSelect;
