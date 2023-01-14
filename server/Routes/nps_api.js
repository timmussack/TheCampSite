const express = require('express')
const router = express.Router()
const { getOne } = require('../models/nps_api.js')

//get a single site from the nps API
router.get('/getOneSite', async(req, res)=>{
  try {
    const data = await getOne(req, res)
    console.log('DATA FROM route', data)
    res.send(data)
  } catch(error) {
    console.log(error)
  }
});

module.exports = router