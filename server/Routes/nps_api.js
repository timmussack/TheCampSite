const express = require('express')
const router = express.Router()

router.get('/', async(req, res)=>{
  console.log('hi from the NPS route!');
  res.send('hello from the nps router')
});

module.exports = router