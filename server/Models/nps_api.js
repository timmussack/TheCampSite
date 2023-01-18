const axios = require('axios');
const path = require('node:path');
const otherPath = require('find-config');
require('dotenv').config({ path: otherPath('.env') });
// require('dotenv').config();

const npsBaseUrl = process.env.NPS_BASE_URL;
const npsAPIKEY = process.env.NPS_API_KEY;

console.log('here is npsAPIKEY and npsBaseUrl', npsAPIKEY, npsBaseUrl);

const getAll = async () => {
  const config = {
    method: 'get',
    url: `${npsBaseUrl}/campgrounds?limit=1000`,
    headers: {
      'x-api-key': npsAPIKEY,
    },
  };
    // console.log('base variable', config.url)
  try {
    const response = await axios(config);
    return response.data;
    // res.send(response.data)
    // res.send(response.data)
  } catch (error) {
    console.log('error in API call', error);
    return error;
    // console.log(error)
    // res.sendStatus(401)
  }
};

module.exports.getAll = getAll;
