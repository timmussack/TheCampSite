const db = require('./db.js');
const MongoModels = require('./Models/mongoModels.js');
const NPSModels = require('./Models/nps_api.js');

// array of photo arrays to cycle through as we seed the database
const photos = [['https://res.cloudinary.com/dfxzjeut8/image/upload/v1673991542/The%20CampSite/tentatnight_zlclnn.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1673991542/The%20CampSite/firepit_h3r3yd.webp', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1673991542/The%20CampSite/campinginavan_av0tvy.webp', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1673991542/The%20CampSite/firebylake_naqhsu.jpg'], ['https://res.cloudinary.com/dfxzjeut8/image/upload/v1673991542/The%20CampSite/tentatday_hokdbg.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1673991542/The%20CampSite/hammock_yxi0qg.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1673991542/The%20CampSite/rvatsunset_eojnen.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1673991542/The%20CampSite/dadandchild_j5mptn.jpg'], ['https://res.cloudinary.com/dfxzjeut8/image/upload/v1673991541/The%20CampSite/restingbytheriver_vdur25.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1673991541/The%20CampSite/kayak_rbocxl.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1673991541/The%20CampSite/tentatsunset_kj1jv8.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1673991541/The%20CampSite/tentinwoods_worl0x.jpg'], ['https://res.cloudinary.com/dfxzjeut8/image/upload/v1673991541/The%20CampSite/rvonroad_enazlu.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1673991541/The%20CampSite/creek_qhs6kh.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1673991541/The%20CampSite/rvbythebeach_fjo5t1.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1673991541/The%20CampSite/lakefronttent_cpmmaj.jpg'], ['https://res.cloudinary.com/dfxzjeut8/image/upload/v1673991541/The%20CampSite/firebyandcoffee_pbtqtm.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1673991541/The%20CampSite/lotsoftents_rt7yir.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1673991541/The%20CampSite/popupcamper_szmplv.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1673735698/The%20CampSite/WonderLake_pxybpb.jpg']];

// Call the nps API for full array of campsite Objects
let arrOfCampsites;
NPSModels.getAll().then((res) => {
  arrOfCampsites = res.data;
  // track page
  let page = 0;
  // loop over the arr of Objs, assigning the appropriate information to our Campsite model as we go
  for (let i = 0; i < arrOfCampsites.length; i += 1) {
    let curr = arrOfCampsites[i];
    if (i % 100 === 0) {
      console.log('100 logged');
    }
    if (i % 20 === 0) {
      page += 1;
    }
    /* ======= Assign dummy data if real data doesn't exist ======= */
    let phoneNumber;
    if (curr.contacts.phoneNumbers.length > 0) {
      phoneNumber = curr.contacts.phoneNumbers[0].phoneNumber;
    } else {
      phoneNumber = '(555) 555-5555';
    }
    let emailAddress;
    if (curr.contacts.emailAddresses.length > 0) {
      emailAddress = curr.contacts.emailAddresses[0].emailAddress;
    } else {
      emailAddress = 'campsites@campsites.com';
    }
    let postalCode;
    if (curr.addresses.length > 0) {
      postalCode = curr.addresses[0].postalCode
    } else {
      postalCode = 'none listed'
    }
    let city;
    if (curr.addresses.length > 0) {
      city = curr.addresses[0].city
    } else {
      city = 'none listed'
    }
    let state;
    if (curr.addresses.length > 0) {
      state = curr.addresses[0].state
    } else {
      state = 'none listed'
    }
    let line1;
    if (curr.addresses.length > 0) {
      line1 = curr.addresses[0].line1
    } else {
      line1 = 'none listed'
    }
    /* ======= Create and save new document to mongo collection ======= */
    new MongoModels.Campsite({
      id: i + 1,
      averageRating: 0,
      numOfReviews: 0,
      page: page,
      campsiteName: curr.name,
      campsitePhone: phoneNumber,
      campsiteEmail: emailAddress,
      description: curr.description,
      amenities: {
        internetConnectivity: curr.amenities.internetConnectivity,
        cellPhoneReception: curr.amenities.cellPhoneReception,
        iceAvailableForSale: curr.amenities.firewoodForSale,
        firewoodAvailableForSale: curr.amenities.iceAvailableForSale,
        staffOrVulnteerHostOnSite: curr.amenities.staffOrVolunteerHostOnsite,
      },
      totalSites: curr.campsites.totalsites,
      wheelChairAccess: curr.accessibility.wheelchairaccess,
      weatherOverview: curr.weatheroverview,
      address: new MongoModels.Address({
        postalCode: postalCode,
        city: city,
        state: state,
        line1: line1,
      }),
      directions: curr.directionsoverview,
      latLong: new MongoModels.LatLng({
        lat: Number(curr.latitude),
        lng: Number(curr.longitude),
      }),
      multimedia: photos[i % 5],
    }).save();
    if (i + 1 === arrOfCampsites.length) {
      console.log('done adding campsites!')
    }
  }
})
  .catch((err) => {
    console.log('error running ETL, here is err: ', err);
  });