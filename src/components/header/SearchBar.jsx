import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from 'react-google-autocomplete';
import { changeCoord, setLocation } from '../../store/coordReducer.js';
import googleKey from '../../../googleApi';

const googleApi = googleKey.googleKey;

function SearchBar() {
  const coordinates = useSelector((state) => state.currentCoord.coordData);
  const location = useSelector((state) => state.currentCoord.location);
  const dispatch = useDispatch();
  function coords(place) {
    dispatch(changeCoord({
      lat: place.geometry.location.lat(),
      long: place.geometry.location.lng(),
    }));
    // setCoords({ lat: place.geometry.location.lat(), long: place.geometry.location.lng() });
    dispatch(setLocation(!location));
  }

  return (
    <Autocomplete className="border-primary border rounded-2xl pl-3 h-9 w-56 desktop:mt-0 self-center" placeholder="Search by location..." apiKey={`${googleApi}`} options={{ types: ['locality', 'administrative_area_level_3', 'street_address', 'park'] }} onPlaceSelected={(place) => { coords(place); }} />
  );
}

export default SearchBar;

/*

app.get('/coords/:lat/:lng', (req, res) => {
  console.log('succesfully sending latitude and longitude:', req.params);
});

*/
