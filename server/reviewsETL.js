const db = require('./db.js');
const MongoModels = require('./Models/mongoModels.js');

const reviewDescriptions = ['Oooo Nelly what a campsite! They really have it all. In the words of the great Arnold Schwarz... I`ll be back!!', 'JUST OKAY! I was expecting trees, dirt, rocks, but I wasn`t expecting mosquitos. I don`t care for them bloodsuckin` no good pests. Park would be way better without `em!', 'Fun. I had fun. Camping is fun. I learned that rocks can be used as friends if you apply googly eyes to them. I did not feel alone- uhhh, win alert!', 'I saw at least 15 different men rubbing their back up and down a tree as if they were bears. I will not be back.', 'My advice? Don`t bring yer wife! I was just trying to fish, mind my own business like, but the ole ball and chain wouldn`t stop yammerin about the health of our child, our retirement fund, my "gambling problem".... 6 beers a night is NOT a drinking problem by the way. Good fishin` though.'];

MongoModels.Campsite.find()
  .then((dbRes) => {
    // loop over array of campsite objects
    for (let i = 0; i < dbRes.length; i += 1) {
      // save 5 reviews for each of these
      const curr = dbRes[i];
      for (let j = 0; j < reviewDescriptions.length; j += 1) {
        const newReview = new MongoModels.Review({
          campsiteName: curr.campsiteName,
          campsiteID: curr.id,
          userName: 'userName',
          description: reviewDescriptions[j],
          rating: Math.floor(Math.random() * (5 - 1 + 1) + 1),
          photos: ['photos here'],
        });
        newReview.save();
      }
      if (i + 1 === dbRes.length) {
        console.log('done adding reviews!');
      }
    }
  })
  .catch((err) => {
    console.log('error in reviewsETL, here is err :', err);
  });

/*

PLANNING REVIEWS db

needs to be searchable by:
  proximity
  number of reviews
  rating (highest)

ETL-
get all campsites,
loop over all campsites,
assign data to new review model,
save new review model

  */
