const MongoModels = require('./Models/mongoModels.js');

const getByAnything = (req, res) => {
  const {
    rev, rat, loc, rad,
  } = req.body;
  // create query and sort objects whose contents depend on our filter parameters
  let queryObj = {
    latLong: { $near: { $geometry: { type: 'Point', coordinates: [loc.long, loc.lat] }, $maxDistance: rad * 1609.344 } }, // * 1609.344
  };
  const sortObj = {};
  // run through conditional logic which appropriate dresses the query and sort objects
  if (rad === 'N/A') {
    queryObj.latLong = { $near: { $geometry: { type: 'Point', coordinates: [loc.long, loc.lat] } } };
  }
  if (loc === 'N/A') {
    queryObj = {};
  }
  if (rat !== 'N/A') {
    sortObj.averageRating = -1;
  }
  if (rev !== 'N/A') {
    sortObj.numOfReviews = -1;
  }
  console.log('hit getByAnything, here is queryObj :', queryObj, 'and sortObj :', sortObj);
  // search the database given our current search params, return result to client
  MongoModels.Campsite.find(queryObj).sort(sortObj)
    .then((dbRes) => {
      res.send(dbRes);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = getByAnything;
