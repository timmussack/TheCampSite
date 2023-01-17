const express = require('express');

const router = express.Router();
const { getAll } = require('../models/nps_api.js');

// get a single site from the nps API
router.get('/getOneSite', async (req, res) => {
  try {
    const data = await getAll(req, res);
    // sends an array of campsite objects back to the client

    res.send(data.data);
  } catch (error) {
    // console.log(error)
    res.sendStatus(400);
  }
});

module.exports = router;
