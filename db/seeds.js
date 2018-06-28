const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Museum = require('../models/museum');
const User = require('../models/user');
const { dbURI } = require('../config/environment');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  User.create([{
    username: 'chavez',
    email: 'chavez@test.com',
    password: 'password',
    passwordConfirmation: 'password'
  }])
    .then((users) => {
      console.log('User created');
      return Museum.create([{
        name: 'London Art Museum',
        category: 'Art',
        address: 'Address: Trafalgar Square, London',
        postcode: 'WC2N 5DN',
        location: { lat: 51.506724, lng: -0.080987 },
        images: [
          './assets/Museum/Art/NationalArtGallery/frontPage-nationalArtMuseum.png',
          './assets/Museum/Art/NationalArtGallery/NationalGallery-2.jpg',
          './assets/Museum/Art/NationalArtGallery/National-Gallery-2.jpg'
        ],
        owner: users[0],
        reviews: [{
          content: 'Great Service',
          rating: 4,
          author: users[0],
          photo: 'https://i.imgur.com/7J3Choe.jpg'
        }]
      }, {
        name: 'The British Museum',
        category: 'History',
        address: 'Great Russell St, Bloomsbury, London',
        postcode: 'WC1B 3DG',
        location: { lat: 51.506724, lng: -0.080987 },
        images: [
          './assets/Museum/History/Bristish-Museum/FrontPage-british-museum.jpg',
          './assets/Museum/History/Bristish-Museum/gold-collection.jpg',
          './assets/Museum/History/Bristish-Museum/chessmen_1.jpg'
        ],
        owner: users[0],
        reviews: [{
          content: 'Great Service',
          rating: 4,
          author: users[0],
          photo: 'https://i.imgur.com/7J3Choe.jpg'
        }]
      },{
        name: 'Museum of the History of Science',
        category: 'science',
        address: 'Broad St, Oxford',
        postcode: 'OX1 3AZ',
        location: { lat: 51.506724, lng: -0.080987 },
        images: [
          './assets/Museum/Science/Science-Oxford/FrontPage-ScienceOxford.jpg',
          './assets/Museum/Science/Science-Oxford/Science-2.jpg',
          './assets/Museum/Science/Science-Oxford/Science-1.jpg'
        ],
        owner: users[0],
        reviews: [{
          content: 'Great Service',
          rating: 4,
          author: users[0],
          photo: 'https://i.imgur.com/7J3Choe.jpg'
        }]
      },{
        name: 'victoria and albert',
        category: 'Art',
        address: 'Cromwell Rd, Knightsbridge, London',
        postcode: 'SW7 2RL',
        location: { lat: 51.506724, lng: -0.080987 },
        image: '/assets/Museum/Art/V&A/frontPage-V&A.jpg',
        owner: users[0],
        reviews: [{
          content: 'Great Service',
          rating: 4,
          author: users[0],
          photo: 'https://i.imgur.com/7J3Choe.jpg'
        }],
        images: [
          './assets/Museum/Art/V&A/frontPage-V&A.jpg',
          './assets/Museum/Art/V&A/V&A statue-1.jpg',
          './assets/Museum/Art/V&A/V&A statue-2.jpg'
        ]

      },{
        name: 'National Museum Cardiff',
        category: 'History',
        address: 'Cathays Park, Cardiff',
        postcode: 'CF10 3NP',
        location: { lat: 51.506724, lng: -0.080987 },
        images: [
          './assets/Museum/History/National-Musem-cardiff/frontPage-National-Museum-Cardiff.jpg',
          './assets/Museum/History/National-Musem-cardiff/National-Musem-cardiff-1.jpg'
        ],
        owner: users[0],
        reviews: [{
          content: 'Great Service',
          rating: 4,
          author: users[0],
          photo: 'https://i.imgur.com/7J3Choe.jpg'
        }]
      },{
        name: 'Winchester Science',
        category: 'science',
        address: 'Address: Telegraph Way, Winchester',
        postcode: 'SO21 1HZ',
        location: { lat: 51.506724, lng: -0.080987 },
        images: [
          './assets/Museum/Science/WinchesterScience/frontPage-WinchesterScience.jpeg',
          './assets/Museum/Science/WinchesterScience/science-centre-winchester-1.jpg',
          './assets/Museum/History/National-Musem-cardiff/National-Musem-cardiff-2.jpg'
        ],
        owner: users[0],
        reviews: [{
          content: 'Great Service',
          rating: 4,
          author: users[0],
          photo: 'https://i.imgur.com/7J3Choe.jpg'
        }]
      },{
        name: 'Wallace Collection',
        category: 'Art',
        address: 'Hertford House, Manchester Square, London',
        postcode: 'W1U 3BN',
        location: { lat: 51.506724, lng: -0.080987 },
        images: [
          './assets/Museum/Art/Wallace-Collection/frontPage-wallace-collection-.jpg',
          './assets/Museum/Art/Wallace-Collection/wallace-collection-great-gallery-1.jpg',
          './assets/Museum/Art/Wallace-Collection/wallace-collection-great-gallery-2.jpg'

        ],
        owner: users[0],
        reviews: [{
          content: 'Great Service',
          rating: 4,
          author: users[0],
          photo: 'https://i.imgur.com/7J3Choe.jpg'
        }]
      },{
        name: 'Museum of Childhood',
        category: 'children',
        address: 'Cambridge Heath Rd, London',
        postcode: 'E2 9PA',
        location: { lat: 51.506724, lng: -0.080987 },
        images: ['https://static.weddingvenues.com/venues/museum_childhood_1000px.jpg',
          'https://cdn.londonandpartners.com/asset/vanda-museum-of-childhood-dolls-house-gallery-54fdcee78b6e06e9a3a31b501dda667a.jp',
          'https://www.keatons.com/access-london/wp-content/uploads/2014/08/VandA_museum_of_childhood-content-image.jpg'
        ],
        owner: users[0],
        reviews: [{
          content: 'Great Service',
          rating: 4,
          author: users[0],
          photo: 'https://i.imgur.com/7J3Choe.jpg'
        }]
      },{
        name: 'The Cartoon Museum',
        category: 'Children',
        address: '35 Little Russell St, Bloomsbury, London',
        postcode: 'WC1A 2HH',
        location: { lat: 51.506724, lng: -0.080987 },
        images: [
          'http://ddk82aqeuj01i.cloudfront.net/2007/May/MO384880_393high.jpg',
          'https://themother-hood.com/wp-content/uploads/2018/01/The-Cartoon-Museum-2-1.jpg',
          'https://themother-hood.com/wp-content/uploads/2018/01/The-Cartoon-Museum-1-1.jpg'

        ],
        owner: users[0],
        reviews: [{
          content: 'Great Service',
          rating: 4,
          author: users[0],
          photo: 'https://i.imgur.com/7J3Choe.jpg'
        }]
      },{
        name: 'Museum of Brands, Packaging & Advertising',
        category: 'Design',
        address: '111-117 Lancaster Rd, London',
        postcode: 'W11 1QT',
        location: { lat: 51.506724, lng: -0.080987 },
        images: [
          'http://apollointeriors.com/wp-content/uploads/2016/03/07Mar2016-013-1800x938.jpg',
          'https://media.timeout.com/images/105154308/1372/772/image.jpg',
          'https://media.timeout.com/images/105154304/1372/772/image.jpg'

        ],
        owner: users[0],
        reviews: [{
          content: 'Great Service',
          rating: 4,
          author: users[0],
          photo: 'https://i.imgur.com/7J3Choe.jpg'
        }]
      },{
        name: 'Sherlock Holmes Museum',
        category: 'Other',
        address: '221b Baker St, Marylebone, London',
        postcode: 'NW1 6XE',
        location: { lat: 51.506724, lng: -0.080987 },
        images: [
          'http://kidrated.com/kidrated/wp-content/uploads/2015/06/Screen-Shot-2015-06-08-at-15.16.26-900x506.jpg',
          'https://strawberrytours.com/images/LondonArticles/Museums/SherlockHolmesMuseum/gallery/Sherlock_Holmes_Museum_exhibit_Raenef.jpg',
          'https://strawberrytours.com/cache/thumbs/80f17fe84d87ff44c4cf94d3b781988a.jpg'

        ],
        owner: users[0],
        reviews: [{
          content: 'Great Service',
          rating: 4,
          author: users[0],
          photo: 'https://i.imgur.com/7J3Choe.jpg'
        }]
      },{
        name: 'Imperial War Museum North',
        category: 'Military',
        address: 'Trafford Wharf Rd, Stretford, Manchester',
        postcode: 'M17 1TZ',
        location: { lat: 51.506724, lng: -0.080987 },
        images: [
          'http://s0.geograph.org.uk/geophotos/01/66/00/1660068_a17ff519.jpg',
          'https://www.gettysburgmuseumofhistory.com/wp-content/uploads/Battle-of-Gettysburg-Museum-American-Civil-War-sl3.jp', 'https://www.eventcomm.com/images/uploads/work_slides/IWM1-1920x750px.jpg'
        ],
        owner: users[0],
        reviews: [{
          content: 'Great Service',
          rating: 4,
          author: users[0],
          photo: 'https://i.imgur.com/7J3Choe.jpg'
        }]
      },{
        name: 'The keep military',
        category: 'Military',
        address: 'Bridport Rd, Dorchester',
        postcode: 'DT1 1RN',
        location: { lat: 51.506724, lng: -0.080987 },
        images: [
          'https://www.keepmilitarymuseum.org/images/homepage-boxes/the-keep-museum.jpg',
          'http://www.dorchesterdorset.com/graphics/museums/keep/charge.jpg',
          'http://www.culture24.org.uk/asset_arena/9/76/21/512679/v0_large.jpg'
        ],
        owner: users[0],
        reviews: [{
          content: 'Great Service',
          rating: 4,
          author: users[0],
          photo: 'https://i.imgur.com/7J3Choe.jpg'
        }]
      },{
        name: 'National Maritime Museum',
        category: 'Maritime',
        address: 'Park Row, London',
        postcode: 'SE10 9NF',
        location: { lat: 51.506724, lng: -0.080987 },
        images: [
          'https://cdn.londonandpartners.com/asset/a6e7fb61024e77ece41bf65251d8cb7f.jpg',
          'https://assets.londonist.com/uploads/2016/08/i875/sea_things_2_-_national_maritime_museum__london.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-s/02/fb/44/0f/national-maritime-museum.jpg'
        ],
        owner: users[0],
        reviews: [{
          content: 'Great Service',
          rating: 4,
          author: users[0],
          photo: 'https://i.imgur.com/7J3Choe.jpg'
        }]
      },{
        name: 'Aberdeen Maritime Museum',
        category: 'Maritime',
        address: 'Shiprow, Aberdeen',
        postcode: 'AB11 5BY',
        location: { lat: 51.506724, lng: -0.080987 },
        images: [
          'https://www.pressandjournal.co.uk/wp-content/uploads/sites/2/2015/02/Aberdeen-Maritime-Museum.jpg',
          'https://www.visitabdn.com/assets/Uploads/_resampled/ScaleWidthWyIxOTAwIl0/Maritime-Museum-057.jpg',
          'https://c1.staticflickr.com/5/4094/5409739451_af300f8781_b.jpg'
        ],
        owner: users[0],
        reviews: [{
          content: 'Great Service',
          rating: 4,
          author: users[0],
          photo: 'https://i.imgur.com/7J3Choe.jpg'
        }]
      }
      ]);
    })
    .then(museums => console.log(`${museums.length} museum(s) created`))
    .catch(err => console.log(err))
    .finally(() =>  mongoose.connection.close());
});
