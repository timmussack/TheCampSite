const axios = require('axios');

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const npsAPI = require('./Routes/nps_api.js');

/* ======== ======== ======== MIDDLEWARE ======== ======== ======== */
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

/* ======== ======== ======== Routers ======== ======== ======== */
app.use('/npsApi', npsAPI);

app.get('/', (req, res) => {
  res.send('yer up \'n runnin\'');
});

app.get('/googleaccess', async (req, res) => {
  console.log(req);
  res.sendStatus(201);
  // try {
  //   const response = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${res.body.access_token}`, {
  //     headers: {
  //       Authorization: `${res.body.access_token}`,
  //     },
  //   });

  //   console.log(response.data);
  // } catch (err) {
  //   console.log(err);
  // }
});
/* ======== ======== ======== SET TO LISTEN ======== ======== ======== */

const PORT = process.env.PORT || 4007;
app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});
