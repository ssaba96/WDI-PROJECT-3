const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Museum = require('../models/museum');
const User = require('../models/user');
const { dbURI } = require('../config/environment');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  User.create({
    username: 'chavez',
    email: 'chavez@test.com',
    password: 'password',
    passwordConfirmation: 'password'
  })
    .then(() => {
      console.log('User created');
      return Museum.create([{
        name: 'London Art Museum',
        category: 'Art',
        address: 'Address: Trafalgar Square, London',
        postcode: 'WC2N 5DN',
        location: { lat: 51.506724, lng: -0.080987 },
        images: [
          '/assets/Museum/Art/NationalArtGallery/frontPage-nationalArtMuseum.png'
        ]
      }, {
        name: 'The British Museum',
        category: 'History',
        address: 'Great Russell St, Bloomsbury, London',
        postcode: 'WC1B 3DG',
        location: { lat: 51.506724, lng: -0.080987 },
        images: [
          '/assets/Museum/History/Bristish-Museum/FrontPage-british-museum.jpg',
          '/assets/Museum/History/Bristish-Museum/gold-collection.jpg'
        ]
      },{
        name: 'Museum of the History of Science',
        category: 'science',
        address: 'Broad St, Oxford',
        postcode: 'OX1 3AZ',
        location: { lat: 51.506724, lng: -0.080987 },
        images: ['/assets/Museum/Science/Science-Oxford/FrontPage-ScienceOxford.jpg'
        ]
      },{
        name: 'victoria and albert',
        category: 'Art',
        address: 'Cromwell Rd, Knightsbridge, London',
        postcode: 'SW7 2RL',
        location: { lat: 51.506724, lng: -0.080987 },
        images: ['/assets/Museum/Art/V&A/frontPage-V&A.jpg'
        ]

      },{
        name: 'National Museum Cardiff',
        category: 'History',
        address: 'Cathays Park, Cardiff',
        postcode: 'CF10 3NP',
        location: { lat: 51.506724, lng: -0.080987 },
        images: ['/assets/Museum/History/National-Musem-cardiff/frontPage-National-Museum-Cardiff.jpg'
        ]
      },{
        name: 'Winchester Science',
        category: 'science',
        address: 'Address: Telegraph Way, Winchester',
        postcode: 'SO21 1HZ',
        location: { lat: 51.506724, lng: -0.080987 },
        images: ['/assets/Museum/Science/WinchesterScience/frontPage-WinchesterScience.jpeg'
        ]
      },{
        name: 'Wallace Collection',
        category: 'Art',
        address: 'Hertford House, Manchester Square, London',
        postcode: 'W1U 3BN',
        location: { lat: 51.506724, lng: -0.080987 },
        images: ['/assets/Museum/Art/Wallace-Collection/frontPage-wallace-collection-.jpg'
        ]
      },{
        name: 'Museum of Childhood',
        category: 'children',
        address: 'Cambridge Heath Rd, London',
        postcode: 'E2 9PA',
        location: { lat: 51.506724, lng: -0.080987 },
        images: ['https://static.weddingvenues.com/venues/museum_childhood_1000px.jpg'
        ]
      },{
        name: 'The Cartoon Museum',
        category: 'Children',
        address: '35 Little Russell St, Bloomsbury, London',
        postcode: 'WC1A 2HH',
        location: { lat: 51.506724, lng: -0.080987 },
        images: ['http://ddk82aqeuj01i.cloudfront.net/2007/May/MO384880_393high.jpg'
        ]
      },{
        name: 'Museum of Brands, Packaging & Advertising',
        category: 'Design',
        address: '111-117 Lancaster Rd, London',
        postcode: 'W11 1QT',
        location: { lat: 51.506724, lng: -0.080987 },
        images: ['http://apollointeriors.com/wp-content/uploads/2016/03/07Mar2016-013-1800x938.jpg'
        ]
      },{
        name: 'Sherlock Holmes Museum',
        category: 'Other',
        address: '221b Baker St, Marylebone, London',
        postcode: 'NW1 6XE',
        location: { lat: 51.506724, lng: -0.080987 },
        images: ['http://kidrated.com/kidrated/wp-content/uploads/2015/06/Screen-Shot-2015-06-08-at-15.16.26-900x506.jpg'
        ]
      },{
        name: 'Imperial War Museum North',
        category: 'Military',
        address: 'Trafford Wharf Rd, Stretford, Manchester',
        postcode: 'M17 1TZ',
        location: { lat: 51.506724, lng: -0.080987 },
        images: ['http://s0.geograph.org.uk/geophotos/01/66/00/1660068_a17ff519.jpg'
        ]
      },{
        name: 'The keep military',
        category: 'Military',
        address: 'Bridport Rd, Dorchester',
        postcode: 'DT1 1RN',
        location: { lat: 51.506724, lng: -0.080987 },
        images: ['https://www.keepmilitarymuseum.org/images/homepage-boxes/the-keep-museum.jpg'
        ]
      },{
        name: 'National Maritime Museum',
        category: 'Maritime',
        address: 'Park Row, London',
        postcode: 'SE10 9NF',
        location: { lat: 51.506724, lng: -0.080987 },
        images: ['https://cdn.londonandpartners.com/asset/a6e7fb61024e77ece41bf65251d8cb7f.jpg'
        ]
      },{
        name: 'Aberdeen Maritime Museum',
        category: 'Maritime',
        address: 'Shiprow, Aberdeen',
        postcode: 'AB11 5BY',
        location: { lat: 51.506724, lng: -0.080987 },
        images: ['https://www.pressandjournal.co.uk/wp-content/uploads/sites/2/2015/02/Aberdeen-Maritime-Museum.jpg'
        ]
      }
      ]);
    })
    .then(museums => console.log(`${museums.length} museum(s) created`))
    .catch(err => console.log(err))
    .finally(() =>  mongoose.connection.close());
});
