/* eslint-disable consistent-return */
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
  const newReview = new MongoModels.Review({
    campsiteName: req.body.campsiteName,
    campsiteID: req.body.campsiteID,
    userName: req.body.userName,
    description: req.body.description,
    rating: req.body.rating,
    photos: req.body.photos,
  });
  newReview.save()
    .then((saveRes) => MongoModels.Campsite.find({ id: req.body.campsiteID }))
    .then((findRes) => {
      const currRating = findRes[0].averageRating;
      const currNumOfReviews = findRes[0].numOfReviews;
      const newNumOfReviews = currNumOfReviews + 1;
      const newRating = (currRating * currNumOfReviews + req.body.rating) / newNumOfReviews;
      return MongoModels.Campsite.findOneAndUpdate({ id: req.body.campsiteID }, {
        averageRating: newRating,
        numOfReviews: newNumOfReviews,
      });
    })
    .then((updateRes) => {
      res.send('review added!');
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/addUser', (req, res) => {
  MongoModels.User.find({ userEmail: req.query.email })
    .then((userRes) => {
      if (userRes.length !== 0) {
        res.sendStatus(200);
      } else {
        MongoModels.User.create({
          userName: req.query.email.split('@')[0],
          userEmail: req.query.email,
          userPassword: '',
          sitesVisited: [],
          friendUserNames: [],
        })
          .then((val) => {
            res.sendStatus(201);
          })
          .catch((err) => res.send(err));
      }
    })
    .catch((err) => res.send(err));
});

app.post('/getFiltered', (req, res) => {
  getByAnything(req, res);
});

app.get('/campsiteReviews', (req, res) => {
  MongoModels.Review.find({ campsiteID: req.query.campsiteID })
    .then((resultData) => res.send(resultData))
    .catch((err) => res.send(err));
});

app.put('/favorite', (req, res) => {
  console.log('favorite');
  console.log(req.body);
});

app.put('/unfavorite', (req, res) => {
  console.log('unfavorite');
  console.log(req.body);
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
