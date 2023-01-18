const db = require('./db.js');
const MongoModels = require('./Models/mongoModels.js');

// gotta generate a number randomly

MongoModels.Campsite.find()
  .then((dbRes) => {
    // loop over array of campsite objects
    for (let i = 1; i < dbRes.length + 1; i += 1) {
      // calculate the average review score for each campsite
      const curr = dbRes[i];
      MongoModels.Review.find({ campsiteID: i })
        .then((reviewsRes) => {
          // sum the reviews for this campsite and assign its average and number to the campsite
          let sumOfRatings = 0;
          for (let j = 0; j < reviewsRes.length; j += 1) {
            sumOfRatings += reviewsRes[j].rating;
          }
          MongoModels.Campsite.findOneAndUpdate({
            id: reviewsRes[0].campsiteID,
          }, {
            $set: {
              averageRating: sumOfRatings / reviewsRes.length,
              numOfReviews: reviewsRes.length,
            },
          })
            .then((updateRes) => {
              // console.log('dbRes from findOneAndUpdate :', updateRes);
            })
            .catch((err) => {
              console.log('error in findOneAndUpdate :', err);
            });
        })
        .catch((err) => {
          console.log('err assigning average and num of reviews to campsite', err);
        });
      if (i === dbRes.length) {
        console.log('done updating campsites with average reviews and num of reviews!');
      }
    }
  })
  .catch((err) => {
    console.log('error in reviewsETL, here is err :', err);
  });
