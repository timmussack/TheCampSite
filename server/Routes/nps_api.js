const express = require('express');

const router = express.Router();
const { getAll } = require('../Models/nps_api.js');

// get a single site from the nps API
router.get('/getAllCampSites', async (req, res) => {
  try {
    const data = await getAll(req, res);
    // sends an array of campsite objects back to the client
    // got to http://localhost:3007/npsAPI/getOneSite to view the data

    res.send(data.data);
  } catch (error) {
    // console.log(error)
    res.sendStatus(400);
  }
});

module.exports = router;
