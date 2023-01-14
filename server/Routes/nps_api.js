const express = require('express')
const router = express.Router()
const axios = require('axios')

require('dotenv').config()

router.get('/', async(req, res)=>{
  console.log('hi from the NPS route!');
  res.send('hello from the nps router')
});

module.exports = router