const mongoose = require('mongoose');

// ======== CAMPSITE INFO (from API) ============ //

const latLongSchema = new mongoose.Schema({
  lat: Number,
  lng: Number,
});

const addressSchema = new mongoose.Schema({
  postalCode: Number,
  city: String,
  state: String, // two letters!
  line1: String,
});

const campsiteSchema = new mongoose.Schema({
  page: Number,
  campsiteName: String,
  campsitePhone: String,
  campsiteEmail: String,
  description: String,
  amenities: {
    internetConnectivity: String,
    cellPhoneReception: String,
    iceAvailableForSale: String,
    firewoodAvailableForSale: String,
    staffOrVulnteerHostOnSite: String,
  },
  totalSites: Number,
  wheelChairAccess: String,
  weatherOverview: String,
  address: addressSchema,
  directions: String,
  latLong: latLongSchema,
  multimedia: [{
    type: String,
  }],
});

// ======== USERS (from local) ============ //

const userSchema = new mongoose.Schema({
  userName: String, // email split at @
  userEmail: String,
  userPassword: String,
  sitesVisited: [{
    type: String,
  }],
  friendUserNames: [{
    type: String,
  }],
});

// ======== REVIEWS (from local) ============ //

const reviewSchema = new mongoose.Schema({
  campsiteName: String,
  userName: String,
  description: String,
  rating: Number,
  photos: [{
    type: String,
  }],
});

const LatLng = mongoose.model('LatLng', latLongSchema);
const Address = mongoose.model('Address', addressSchema);
const Campsite = mongoose.model('Campsite', campsiteSchema);
const User = mongoose.model('User', userSchema);
const Review = mongoose.model('Review', reviewSchema);

module.exports = {
  LatLng, Address, Campsite, User, Review,
};
