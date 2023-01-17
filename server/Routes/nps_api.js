const express = require('express');

const router = express.Router();
const { getOne } = require('../Models/nps_api.js');

// get a single site from the nps API
router.get('/getOneSite', async (req, res) => {
  try {
    const data = await getOne(req, res);
    res.send(data);
  } catch (error) {
    // console.log(error)
    res.sendStatus(400);
  }
});

module.exports = router;
