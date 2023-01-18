const axios = require('axios');
const path = require('node:path');
// require('dotenv').config({ path: require('find-config')('.env') });
require('dotenv').config();

const npsBaseUrl = process.env.NPS_BASE_URL;
const npsAPIKEY = process.env.NPS_API_KEY;

const getAll = async () => {
  const config = {
    method: 'get',
    url: `${npsBaseUrl}/campgrounds`,
    headers: {
      'x-api-key': npsAPIKEY,
    },
  };
    // console.log('base variable', config.url)
  try {
    const response = await axios(config);
    return response.data;
    // res.send(response.data)
    // console.log('data from model', data)
    // res.send(response.data)
  } catch (error) {
    return error;
    // console.log(error)
    // res.sendStatus(401)
  }
};

module.exports.getAll = getAll;
