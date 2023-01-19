import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import googleKey from '../../../googleApi.js';

const googleApi = googleKey.googleKey;

function SearchBar({ setCoords, setLocation }) {
  function coords(place) {
    setCoords({ lat: place.geometry.location.lat(), long: place.geometry.location.lng() });
    setLocation(true);
  }

  return (
    <Autocomplete className="border-primary border rounded-2xl pl-3 h-9 w-56 mt-2 desktop:mt-0 self-center" placeholder="Search by location..." apiKey={`${googleApi}`} options={{ types: ['locality', 'administrative_area_level_3', 'street_address', 'park'] }} onPlaceSelected={(place) => { coords(place); }} />
  );
}

export default SearchBar;

/*

app.get('/coords/:lat/:lng', (req, res) => {
  console.log('succesfully sending latitude and longitude:', req.params);
});

*/
