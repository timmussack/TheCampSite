const sampleCampsites = [
  {
    id: '1',
    campsiteName: 'Blue Lake',
    campsitePhone: '808-308-4275',
    campsiteEmail: 'wonderlake@email.com',
    description: 'Wonder Lake is a beautiful campground with a lot of trees and wild life. You will likely see a brown bear or grizzly bear. Please do not feed the animals and always stay 100 feet from them. The trees are huge and always green.',
    amenities: {
      internetConnectivity: false,
      cellPhoneReception: false,
      iceAvailableForSale: true,
      firewoodAvailableForSale: true,
      stafforVolunteerHostOnSite: true,
    },
    totalSites: 28,
    wheelChairAccess: 'No',
    weatherOverview: 'The weather is always cold unless it is in the summer months. The average temperature is in the summer is 60 degrees fahrenheit. In the winter the average temperature is -10 degrees fahrenheit',
    address: {
      postalCode: 97837,
      city: 'Denali Park',
      state: 'AK', // two letters!
      line1: 'Mile Marker 85 Denali Park Road',
    },
    directions: 'http://www.nps.gov/dena/planyourvisit/campground-wonder.htm',
    latLong: {
      lat: '63.4574408',
      lng: '-150.8612003',
    },
    multimedia: {
      photos: [
        'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535536/samples/landscapes/nature-mountains.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535549/The%20CampSite/cld-sample-2.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535521/The%20CampSite/sample.jpg',
      ],
    },
  },
  {
    id: '2',
    campsiteName: 'Wonder Lake',
    campsitePhone: '808-308-4275',
    campsiteEmail: 'wonderlake@email.com',
    description: 'Wonder Lake is a beautiful campground with a lot of trees and wild life. You will likely see a brown bear or grizzly bear. Please do not feed the animals and always stay 100 feet from them. The trees are huge and always green.',
    amenities: {
      internetConnectivity: false,
      cellPhoneReception: false,
      iceAvailableForSale: true,
      firewoodAvailableForSale: true,
      stafforVolunteerHostOnSite: 'yes - seasonal',
    },
    totalSites: 28,
    wheelChairAccess: 'No',
    weatherOverview: 'The weather is always cold unless it is in the summer months. The average temperature is in the summer is 60 degrees fahrenheit. In the winter the average temperature is -10 degrees fahrenheit',
    address: {
      postalCode: 97837,
      city: 'Denali Park',
      state: 'AK', // two letters!
      line1: 'Mile Marker 85 Denali Park Road',
    },
    directions: 'http://www.nps.gov/dena/planyourvisit/campground-wonder.htm',
    latLong: {
      lat: '63.4574408',
      lng: '-150.8612003',
    },
    multimedia: {
      photos: [
        'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535536/samples/landscapes/nature-mountains.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535549/The%20CampSite/cld-sample-2.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535521/The%20CampSite/sample.jpg',
      ],
    },
  },
  {
    id: '3',
    campsiteName: 'Wonder Lake',
    campsitePhone: '808-308-4275',
    campsiteEmail: 'wonderlake@email.com',
    description: 'Wonder Lake is a beautiful campground with a lot of trees and wild life. You will likely see a brown bear or grizzly bear. Please do not feed the animals and always stay 100 feet from them. The trees are huge and always green.',
    amenities: {
      internetConnectivity: false,
      cellPhoneReception: false,
      iceAvailableForSale: true,
      firewoodAvailableForSale: true,
      stafforVolunteerHostOnSite: 'yes - seasonal',
    },
    totalSites: 28,
    wheelChairAccess: 'No',
    weatherOverview: 'The weather is always cold unless it is in the summer months. The average temperature is in the summer is 60 degrees fahrenheit. In the winter the average temperature is -10 degrees fahrenheit',
    address: {
      postalCode: 97837,
      city: 'Denali Park',
      state: 'AK', // two letters!
      line1: 'Mile Marker 85 Denali Park Road',
    },
    directions: 'http://www.nps.gov/dena/planyourvisit/campground-wonder.htm',
    latLong: {
      lat: '63.4574408',
      lng: '-150.8612003',
    },
    multimedia: {
      photos: [
        'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535536/samples/landscapes/nature-mountains.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535549/The%20CampSite/cld-sample-2.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535521/The%20CampSite/sample.jpg',
      ],
    },
  },
  {
    id: '4',
    campsiteName: 'Wonder Lake',
    campsitePhone: '808-308-4275',
    campsiteEmail: 'wonderlake@email.com',
    description: 'Wonder Lake is a beautiful campground with a lot of trees and wild life. You will likely see a brown bear or grizzly bear. Please do not feed the animals and always stay 100 feet from them. The trees are huge and always green.',
    amenities: {
      internetConnectivity: false,
      cellPhoneReception: false,
      iceAvailableForSale: true,
      firewoodAvailableForSale: true,
      stafforVolunteerHostOnSite: 'yes - seasonal',
    },
    totalSites: 28,
    wheelChairAccess: 'No',
    weatherOverview: 'The weather is always cold unless it is in the summer months. The average temperature is in the summer is 60 degrees fahrenheit. In the winter the average temperature is -10 degrees fahrenheit',
    address: {
      postalCode: 97837,
      city: 'Denali Park',
      state: 'AK', // two letters!
      line1: 'Mile Marker 85 Denali Park Road',
    },
    directions: 'http://www.nps.gov/dena/planyourvisit/campground-wonder.htm',
    latLong: {
      lat: '63.4574408',
      lng: '-150.8612003',
    },
    multimedia: {
      photos: [
        'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535536/samples/landscapes/nature-mountains.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535549/The%20CampSite/cld-sample-2.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535521/The%20CampSite/sample.jpg',
      ],
    },
  },
  {
    id: '5',
    campsiteName: 'Wonder Lake',
    campsitePhone: '808-308-4275',
    campsiteEmail: 'wonderlake@email.com',
    description: 'Wonder Lake is a beautiful campground with a lot of trees and wild life. You will likely see a brown bear or grizzly bear. Please do not feed the animals and always stay 100 feet from them. The trees are huge and always green.',
    amenities: {
      internetConnectivity: false,
      cellPhoneReception: false,
      iceAvailableForSale: true,
      firewoodAvailableForSale: true,
      stafforVolunteerHostOnSite: 'yes - seasonal',
    },
    totalSites: 28,
    wheelChairAccess: 'No',
    weatherOverview: 'The weather is always cold unless it is in the summer months. The average temperature is in the summer is 60 degrees fahrenheit. In the winter the average temperature is -10 degrees fahrenheit',
    address: {
      postalCode: 97837,
      city: 'Denali Park',
      state: 'AK', // two letters!
      line1: 'Mile Marker 85 Denali Park Road',
    },
    directions: 'http://www.nps.gov/dena/planyourvisit/campground-wonder.htm',
    latLong: {
      lat: '63.4574408',
      lng: '-150.8612003',
    },
    multimedia: {
      photos: [
        'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535536/samples/landscapes/nature-mountains.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535549/The%20CampSite/cld-sample-2.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535521/The%20CampSite/sample.jpg',
      ],
    },
  },
  {
    id: '6',
    campsiteName: 'Wonder Lake',
    campsitePhone: '808-308-4275',
    campsiteEmail: 'wonderlake@email.com',
    description: 'Wonder Lake is a beautiful campground with a lot of trees and wild life. You will likely see a brown bear or grizzly bear. Please do not feed the animals and always stay 100 feet from them. The trees are huge and always green.',
    amenities: {
      internetConnectivity: false,
      cellPhoneReception: false,
      iceAvailableForSale: true,
      firewoodAvailableForSale: true,
      stafforVolunteerHostOnSite: 'yes - seasonal',
    },
    totalSites: 28,
    wheelChairAccess: 'No',
    weatherOverview: 'The weather is always cold unless it is in the summer months. The average temperature is in the summer is 60 degrees fahrenheit. In the winter the average temperature is -10 degrees fahrenheit',
    address: {
      postalCode: 97837,
      city: 'Denali Park',
      state: 'AK', // two letters!
      line1: 'Mile Marker 85 Denali Park Road',
    },
    directions: 'http://www.nps.gov/dena/planyourvisit/campground-wonder.htm',
    latLong: {
      lat: '63.4574408',
      lng: '-150.8612003',
    },
    multimedia: {
      photos: [
        'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535536/samples/landscapes/nature-mountains.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535549/The%20CampSite/cld-sample-2.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535521/The%20CampSite/sample.jpg',
      ],
    },
  },
  {
    id: '7',
    campsiteName: 'Wonder Lake',
    campsitePhone: '808-308-4275',
    campsiteEmail: 'wonderlake@email.com',
    description: 'Wonder Lake is a beautiful campground with a lot of trees and wild life. You will likely see a brown bear or grizzly bear. Please do not feed the animals and always stay 100 feet from them. The trees are huge and always green.',
    amenities: {
      internetConnectivity: false,
      cellPhoneReception: false,
      iceAvailableForSale: true,
      firewoodAvailableForSale: true,
      stafforVolunteerHostOnSite: 'yes - seasonal',
    },
    totalSites: 28,
    wheelChairAccess: 'No',
    weatherOverview: 'The weather is always cold unless it is in the summer months. The average temperature is in the summer is 60 degrees fahrenheit. In the winter the average temperature is -10 degrees fahrenheit',
    address: {
      postalCode: 97837,
      city: 'Denali Park',
      state: 'AK', // two letters!
      line1: 'Mile Marker 85 Denali Park Road',
    },
    directions: 'http://www.nps.gov/dena/planyourvisit/campground-wonder.htm',
    latLong: {
      lat: '63.4574408',
      lng: '-150.8612003',
    },
    multimedia: {
      photos: [
        'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535536/samples/landscapes/nature-mountains.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535549/The%20CampSite/cld-sample-2.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535521/The%20CampSite/sample.jpg',
      ],
    },
  },
  {
    id: '8',
    campsiteName: 'Wonder Lake',
    campsitePhone: '808-308-4275',
    campsiteEmail: 'wonderlake@email.com',
    description: 'Wonder Lake is a beautiful campground with a lot of trees and wild life. You will likely see a brown bear or grizzly bear. Please do not feed the animals and always stay 100 feet from them. The trees are huge and always green.',
    amenities: {
      internetConnectivity: false,
      cellPhoneReception: false,
      iceAvailableForSale: true,
      firewoodAvailableForSale: true,
      stafforVolunteerHostOnSite: 'yes - seasonal',
    },
    totalSites: 28,
    wheelChairAccess: 'No',
    weatherOverview: 'The weather is always cold unless it is in the summer months. The average temperature is in the summer is 60 degrees fahrenheit. In the winter the average temperature is -10 degrees fahrenheit',
    address: {
      postalCode: 97837,
      city: 'Denali Park',
      state: 'AK', // two letters!
      line1: 'Mile Marker 85 Denali Park Road',
    },
    directions: 'http://www.nps.gov/dena/planyourvisit/campground-wonder.htm',
    latLong: {
      lat: '63.4574408',
      lng: '-150.8612003',
    },
    multimedia: {
      photos: [
        'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535536/samples/landscapes/nature-mountains.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535549/The%20CampSite/cld-sample-2.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535521/The%20CampSite/sample.jpg',
      ],
    },
  },
  {
    id: '9',
    campsiteName: 'Wonder Lake',
    campsitePhone: '808-308-4275',
    campsiteEmail: 'wonderlake@email.com',
    description: 'Wonder Lake is a beautiful campground with a lot of trees and wild life. You will likely see a brown bear or grizzly bear. Please do not feed the animals and always stay 100 feet from them. The trees are huge and always green.',
    amenities: {
      internetConnectivity: false,
      cellPhoneReception: false,
      iceAvailableForSale: true,
      firewoodAvailableForSale: true,
      stafforVolunteerHostOnSite: 'yes - seasonal',
    },
    totalSites: 28,
    wheelChairAccess: 'No',
    weatherOverview: 'The weather is always cold unless it is in the summer months. The average temperature is in the summer is 60 degrees fahrenheit. In the winter the average temperature is -10 degrees fahrenheit',
    address: {
      postalCode: 97837,
      city: 'Denali Park',
      state: 'AK', // two letters!
      line1: 'Mile Marker 85 Denali Park Road',
    },
    directions: 'http://www.nps.gov/dena/planyourvisit/campground-wonder.htm',
    latLong: {
      lat: '63.4574408',
      lng: '-150.8612003',
    },
    multimedia: {
      photos: [
        'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535536/samples/landscapes/nature-mountains.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535549/The%20CampSite/cld-sample-2.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535521/The%20CampSite/sample.jpg',
      ],
    },
  },
  {
    id: '10',
    campsiteName: 'Wonder Lake',
    campsitePhone: '808-308-4275',
    campsiteEmail: 'wonderlake@email.com',
    description: 'Wonder Lake is a beautiful campground with a lot of trees and wild life. You will likely see a brown bear or grizzly bear. Please do not feed the animals and always stay 100 feet from them. The trees are huge and always green.',
    amenities: {
      internetConnectivity: false,
      cellPhoneReception: false,
      iceAvailableForSale: true,
      firewoodAvailableForSale: true,
      stafforVolunteerHostOnSite: 'yes - seasonal',
    },
    totalSites: 28,
    wheelChairAccess: 'No',
    weatherOverview: 'The weather is always cold unless it is in the summer months. The average temperature is in the summer is 60 degrees fahrenheit. In the winter the average temperature is -10 degrees fahrenheit',
    address: {
      postalCode: 97837,
      city: 'Denali Park',
      state: 'AK', // two letters!
      line1: 'Mile Marker 85 Denali Park Road',
    },
    directions: 'http://www.nps.gov/dena/planyourvisit/campground-wonder.htm',
    latLong: {
      lat: '63.4574408',
      lng: '-150.8612003',
    },
    multimedia: {
      photos: [
        'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535536/samples/landscapes/nature-mountains.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535549/The%20CampSite/cld-sample-2.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535521/The%20CampSite/sample.jpg',
      ],
    },
  },
  {
    id: '11',
    campsiteName: 'Wonder Lake',
    campsitePhone: '808-308-4275',
    campsiteEmail: 'wonderlake@email.com',
    description: 'Wonder Lake is a beautiful campground with a lot of trees and wild life. You will likely see a brown bear or grizzly bear. Please do not feed the animals and always stay 100 feet from them. The trees are huge and always green.',
    amenities: {
      internetConnectivity: false,
      cellPhoneReception: false,
      iceAvailableForSale: true,
      firewoodAvailableForSale: true,
      stafforVolunteerHostOnSite: true,
    },
    totalSites: 28,
    wheelChairAccess: 'No',
    weatherOverview: 'The weather is always cold unless it is in the summer months. The average temperature is in the summer is 60 degrees fahrenheit. In the winter the average temperature is -10 degrees fahrenheit',
    address: {
      postalCode: 97837,
      city: 'Denali Park',
      state: 'AK', // two letters!
      line1: 'Mile Marker 85 Denali Park Road',
    },
    directions: 'http://www.nps.gov/dena/planyourvisit/campground-wonder.htm',
    latLong: {
      lat: '63.4574408',
      lng: '-150.8612003',
    },
    multimedia: {
      photos: [
        'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535536/samples/landscapes/nature-mountains.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535549/The%20CampSite/cld-sample-2.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535521/The%20CampSite/sample.jpg',
      ],
    },
  },
  {
    id: '12',
    campsiteName: 'Wonder Lake',
    campsitePhone: '808-308-4275',
    campsiteEmail: 'wonderlake@email.com',
    description: 'Wonder Lake is a beautiful campground with a lot of trees and wild life. You will likely see a brown bear or grizzly bear. Please do not feed the animals and always stay 100 feet from them. The trees are huge and always green.',
    amenities: {
      internetConnectivity: false,
      cellPhoneReception: false,
      iceAvailableForSale: true,
      firewoodAvailableForSale: true,
      stafforVolunteerHostOnSite: 'yes - seasonal',
    },
    totalSites: 28,
    wheelChairAccess: 'No',
    weatherOverview: 'The weather is always cold unless it is in the summer months. The average temperature is in the summer is 60 degrees fahrenheit. In the winter the average temperature is -10 degrees fahrenheit',
    address: {
      postalCode: 97837,
      city: 'Denali Park',
      state: 'AK', // two letters!
      line1: 'Mile Marker 85 Denali Park Road',
    },
    directions: 'http://www.nps.gov/dena/planyourvisit/campground-wonder.htm',
    latLong: {
      lat: '63.4574408',
      lng: '-150.8612003',
    },
    multimedia: {
      photos: [
        'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535536/samples/landscapes/nature-mountains.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535549/The%20CampSite/cld-sample-2.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535521/The%20CampSite/sample.jpg',
      ],
    },
  },
  {
    id: '13',
    campsiteName: 'Wonder Lake',
    campsitePhone: '808-308-4275',
    campsiteEmail: 'wonderlake@email.com',
    description: 'Wonder Lake is a beautiful campground with a lot of trees and wild life. You will likely see a brown bear or grizzly bear. Please do not feed the animals and always stay 100 feet from them. The trees are huge and always green.',
    amenities: {
      internetConnectivity: false,
      cellPhoneReception: false,
      iceAvailableForSale: true,
      firewoodAvailableForSale: true,
      stafforVolunteerHostOnSite: 'yes - seasonal',
    },
    totalSites: 28,
    wheelChairAccess: 'No',
    weatherOverview: 'The weather is always cold unless it is in the summer months. The average temperature is in the summer is 60 degrees fahrenheit. In the winter the average temperature is -10 degrees fahrenheit',
    address: {
      postalCode: 97837,
      city: 'Denali Park',
      state: 'AK', // two letters!
      line1: 'Mile Marker 85 Denali Park Road',
    },
    directions: 'http://www.nps.gov/dena/planyourvisit/campground-wonder.htm',
    latLong: {
      lat: '63.4574408',
      lng: '-150.8612003',
    },
    multimedia: {
      photos: [
        'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535536/samples/landscapes/nature-mountains.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535549/The%20CampSite/cld-sample-2.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535521/The%20CampSite/sample.jpg',
      ],
    },
  },
  {
    id: '14',
    campsiteName: 'Wonder Lake',
    campsitePhone: '808-308-4275',
    campsiteEmail: 'wonderlake@email.com',
    description: 'Wonder Lake is a beautiful campground with a lot of trees and wild life. You will likely see a brown bear or grizzly bear. Please do not feed the animals and always stay 100 feet from them. The trees are huge and always green.',
    amenities: {
      internetConnectivity: false,
      cellPhoneReception: false,
      iceAvailableForSale: true,
      firewoodAvailableForSale: true,
      stafforVolunteerHostOnSite: 'yes - seasonal',
    },
    totalSites: 28,
    wheelChairAccess: 'No',
    weatherOverview: 'The weather is always cold unless it is in the summer months. The average temperature is in the summer is 60 degrees fahrenheit. In the winter the average temperature is -10 degrees fahrenheit',
    address: {
      postalCode: 97837,
      city: 'Denali Park',
      state: 'AK', // two letters!
      line1: 'Mile Marker 85 Denali Park Road',
    },
    directions: 'http://www.nps.gov/dena/planyourvisit/campground-wonder.htm',
    latLong: {
      lat: '63.4574408',
      lng: '-150.8612003',
    },
    multimedia: {
      photos: [
        'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535536/samples/landscapes/nature-mountains.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535549/The%20CampSite/cld-sample-2.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535521/The%20CampSite/sample.jpg',
      ],
    },
  },
  {
    id: '15',
    campsiteName: 'Wonder Lake',
    campsitePhone: '808-308-4275',
    campsiteEmail: 'wonderlake@email.com',
    description: 'Wonder Lake is a beautiful campground with a lot of trees and wild life. You will likely see a brown bear or grizzly bear. Please do not feed the animals and always stay 100 feet from them. The trees are huge and always green.',
    amenities: {
      internetConnectivity: false,
      cellPhoneReception: false,
      iceAvailableForSale: true,
      firewoodAvailableForSale: true,
      stafforVolunteerHostOnSite: 'yes - seasonal',
    },
    totalSites: 28,
    wheelChairAccess: 'No',
    weatherOverview: 'The weather is always cold unless it is in the summer months. The average temperature is in the summer is 60 degrees fahrenheit. In the winter the average temperature is -10 degrees fahrenheit',
    address: {
      postalCode: 97837,
      city: 'Denali Park',
      state: 'AK', // two letters!
      line1: 'Mile Marker 85 Denali Park Road',
    },
    directions: 'http://www.nps.gov/dena/planyourvisit/campground-wonder.htm',
    latLong: {
      lat: '63.4574408',
      lng: '-150.8612003',
    },
    multimedia: {
      photos: [
        'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535536/samples/landscapes/nature-mountains.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535549/The%20CampSite/cld-sample-2.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535521/The%20CampSite/sample.jpg',
      ],
    },
  },
  {
    id: '16',
    campsiteName: 'Wonder Lake',
    campsitePhone: '808-308-4275',
    campsiteEmail: 'wonderlake@email.com',
    description: 'Wonder Lake is a beautiful campground with a lot of trees and wild life. You will likely see a brown bear or grizzly bear. Please do not feed the animals and always stay 100 feet from them. The trees are huge and always green.',
    amenities: {
      internetConnectivity: false,
      cellPhoneReception: false,
      iceAvailableForSale: true,
      firewoodAvailableForSale: true,
      stafforVolunteerHostOnSite: 'yes - seasonal',
    },
    totalSites: 28,
    wheelChairAccess: 'No',
    weatherOverview: 'The weather is always cold unless it is in the summer months. The average temperature is in the summer is 60 degrees fahrenheit. In the winter the average temperature is -10 degrees fahrenheit',
    address: {
      postalCode: 97837,
      city: 'Denali Park',
      state: 'AK', // two letters!
      line1: 'Mile Marker 85 Denali Park Road',
    },
    directions: 'http://www.nps.gov/dena/planyourvisit/campground-wonder.htm',
    latLong: {
      lat: '63.4574408',
      lng: '-150.8612003',
    },
    multimedia: {
      photos: [
        'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535536/samples/landscapes/nature-mountains.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535549/The%20CampSite/cld-sample-2.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535521/The%20CampSite/sample.jpg',
      ],
    },
  },
  {
    id: '17',
    campsiteName: 'Wonder Lake',
    campsitePhone: '808-308-4275',
    campsiteEmail: 'wonderlake@email.com',
    description: 'Wonder Lake is a beautiful campground with a lot of trees and wild life. You will likely see a brown bear or grizzly bear. Please do not feed the animals and always stay 100 feet from them. The trees are huge and always green.',
    amenities: {
      internetConnectivity: false,
      cellPhoneReception: false,
      iceAvailableForSale: true,
      firewoodAvailableForSale: true,
      stafforVolunteerHostOnSite: 'yes - seasonal',
    },
    totalSites: 28,
    wheelChairAccess: 'No',
    weatherOverview: 'The weather is always cold unless it is in the summer months. The average temperature is in the summer is 60 degrees fahrenheit. In the winter the average temperature is -10 degrees fahrenheit',
    address: {
      postalCode: 97837,
      city: 'Denali Park',
      state: 'AK', // two letters!
      line1: 'Mile Marker 85 Denali Park Road',
    },
    directions: 'http://www.nps.gov/dena/planyourvisit/campground-wonder.htm',
    latLong: {
      lat: '63.4574408',
      lng: '-150.8612003',
    },
    multimedia: {
      photos: [
        'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535536/samples/landscapes/nature-mountains.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535549/The%20CampSite/cld-sample-2.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535521/The%20CampSite/sample.jpg',
      ],
    },
  },
  {
    id: '18',
    campsiteName: 'Wonder Lake',
    campsitePhone: '808-308-4275',
    campsiteEmail: 'wonderlake@email.com',
    description: 'Wonder Lake is a beautiful campground with a lot of trees and wild life. You will likely see a brown bear or grizzly bear. Please do not feed the animals and always stay 100 feet from them. The trees are huge and always green.',
    amenities: {
      internetConnectivity: false,
      cellPhoneReception: false,
      iceAvailableForSale: true,
      firewoodAvailableForSale: true,
      stafforVolunteerHostOnSite: 'yes - seasonal',
    },
    totalSites: 28,
    wheelChairAccess: 'No',
    weatherOverview: 'The weather is always cold unless it is in the summer months. The average temperature is in the summer is 60 degrees fahrenheit. In the winter the average temperature is -10 degrees fahrenheit',
    address: {
      postalCode: 97837,
      city: 'Denali Park',
      state: 'AK', // two letters!
      line1: 'Mile Marker 85 Denali Park Road',
    },
    directions: 'http://www.nps.gov/dena/planyourvisit/campground-wonder.htm',
    latLong: {
      lat: '63.4574408',
      lng: '-150.8612003',
    },
    multimedia: {
      photos: [
        'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535536/samples/landscapes/nature-mountains.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535549/The%20CampSite/cld-sample-2.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535521/The%20CampSite/sample.jpg',
      ],
    },
  },
  {
    id: '19',
    campsiteName: 'Wonder Lake',
    campsitePhone: '808-308-4275',
    campsiteEmail: 'wonderlake@email.com',
    description: 'Wonder Lake is a beautiful campground with a lot of trees and wild life. You will likely see a brown bear or grizzly bear. Please do not feed the animals and always stay 100 feet from them. The trees are huge and always green.',
    amenities: {
      internetConnectivity: false,
      cellPhoneReception: false,
      iceAvailableForSale: true,
      firewoodAvailableForSale: true,
      stafforVolunteerHostOnSite: 'yes - seasonal',
    },
    totalSites: 28,
    wheelChairAccess: 'No',
    weatherOverview: 'The weather is always cold unless it is in the summer months. The average temperature is in the summer is 60 degrees fahrenheit. In the winter the average temperature is -10 degrees fahrenheit',
    address: {
      postalCode: 97837,
      city: 'Denali Park',
      state: 'AK', // two letters!
      line1: 'Mile Marker 85 Denali Park Road',
    },
    directions: 'http://www.nps.gov/dena/planyourvisit/campground-wonder.htm',
    latLong: {
      lat: '63.4574408',
      lng: '-150.8612003',
    },
    multimedia: {
      photos: [
        'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535536/samples/landscapes/nature-mountains.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535549/The%20CampSite/cld-sample-2.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535521/The%20CampSite/sample.jpg',
      ],
    },
  },
  {
    id: '20',
    campsiteName: 'Wonder Lake',
    campsitePhone: '808-308-4275',
    campsiteEmail: 'wonderlake@email.com',
    description: 'Wonder Lake is a beautiful campground with a lot of trees and wild life. You will likely see a brown bear or grizzly bear. Please do not feed the animals and always stay 100 feet from them. The trees are huge and always green.',
    amenities: {
      internetConnectivity: false,
      cellPhoneReception: false,
      iceAvailableForSale: true,
      firewoodAvailableForSale: true,
      stafforVolunteerHostOnSite: 'yes - seasonal',
    },
    totalSites: 28,
    wheelChairAccess: 'No',
    weatherOverview: 'The weather is always cold unless it is in the summer months. The average temperature is in the summer is 60 degrees fahrenheit. In the winter the average temperature is -10 degrees fahrenheit',
    address: {
      postalCode: 97837,
      city: 'Denali Park',
      state: 'AK', // two letters!
      line1: 'Mile Marker 85 Denali Park Road',
    },
    directions: 'http://www.nps.gov/dena/planyourvisit/campground-wonder.htm',
    latLong: {
      lat: '63.4574408',
      lng: '-150.8612003',
    },
    multimedia: {
      photos: [
        'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535536/samples/landscapes/nature-mountains.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535549/The%20CampSite/cld-sample-2.jpg', 'https://res.cloudinary.com/dfxzjeut8/image/upload/v1670535521/The%20CampSite/sample.jpg',
      ],
    },
  },
];

exports.sampleCampsites = sampleCampsites;
