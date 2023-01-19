const axios = require('axios');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./db.js');
const MongoModels = require('./Models/mongoModels.js');
const npsAPI = require('./Routes/nps_api.js');
const getByAnything = require('./controller.js');

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

app.get('/getAllCampsites', (req, res) => {
  MongoModels.Campsite.find()
    .then((dbRes) => {
      res.send(dbRes);
    })
    .catch((err) => {
      console.log('error in getAllCampsites', err);
      res.send(err);
    });
});

app.get('/campsitesByReviews', (req, res) => {
  MongoModels.Campsite.find().sort({ numOfReviews: -1 })
    .then((dbres) => {
      res.send(dbres);
    })
    .catch((err) => {
      console.log('error in campsitesByReviews', err);
      res.send(err);
    });
});

app.post('/addReview', (req, res) => {
  console.log(req.body);
  res.end('Received review');
});

app.post('/getFiltered', (req, res) => {
  getByAnything(req, res);
});

/* ======= ======== ======== CATCH ALL ROUTE ======== ======== ====== */

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public'));
});

/* ======== ======== ======== SET TO LISTEN ======== ======== ======== */

const PORT = process.env.PORT || 4007;
app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});
