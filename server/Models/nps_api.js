const axios = require('axios')
const path = require('node:path');
require('dotenv').config({ path: require('find-config')('.env') })

const npsBaseUrl = process.env.NPS_BASE_URL
const npsAPIKEY = process.env.NPS_API_KEY

console.log('NPS base url', process.env.NPS_BASE_URL)

const getOne = (req, res) => {
  const config = {
      method: 'get',
      url: `${npsBaseUrl}/campgrounds?Limit=1`,
      headers: {
        'x-api-key': npsAPIKEY
      }
    };
    console.log('base variable', config.url)

    axios(config)
    .then((data)=>console.log(data.data))
    .catch((error)=>console.log(error, 'error'))

}

module.exports.getOne = getOne;
