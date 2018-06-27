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
        image: '/assets/Museum/Art/NationalArtGallery/frontPage-nationalArtMuseum.png'
      }, {
        name: 'The Bristish Museum',
        category: 'History',
        address: 'Great Russell St, Bloomsbury, London',
        postcode: 'WC1B 3DG',
        location: { lat: 51.506724, lng: -0.080987 },
        image: '/assets/Museum/History/Bristish-Museum/FrontPage-british-museum.jpg'
      },{
        name: 'Museum of the History of Science',
        category: 'science',
        address: 'Broad St, Oxford',
        postcode: 'OX1 3AZ',
        location: { lat: 51.506724, lng: -0.080987 },
        image: '/assets/Museum/Science/Science-Oxford/FrontPage-ScienceOxford.jpg'
      },{
        name: 'victoria and albert',
        category: 'Art',
        address: 'Cromwell Rd, Knightsbridge, London',
        postcode: 'SW7 2RL',
        location: { lat: 51.506724, lng: -0.080987 },
        image: '/assets/Museum/Art/V&A/frontPage-V&A.jpg'

      },{
        name: 'National Museum Cardiff',
        category: 'History',
        address: 'Cathays Park, Cardiff',
        postcode: 'CF10 3NP',
        location: { lat: 51.506724, lng: -0.080987 },
        image: '/assets/Museum/History/National-Musem-cardiff/frontPage-National-Museum-Cardiff.jpg'
      },{
        name: 'Winchester Science',
        category: 'science',
        address: 'Address: Telegraph Way, Winchester',
        postcode: 'SO21 1HZ',
        location: { lat: 51.506724, lng: -0.080987 },
        image: '/assets/Museum/Science/WinchesterScience/frontPage-WinchesterScience.jpeg'
      },{
        name: 'Wallace Collection',
        category: 'Art',
        address: 'Hertford House, Manchester Square, London',
        postcode: 'W1U 3BN',
        location: { lat: 51.506724, lng: -0.080987 },
        image: '/assets/Museum/Art/Wallace-Collection/frontPage-wallace-collection-.jpg'
      }
      //   name: 'London Art Museum',
      //   category: 'science',
      //   address: 'London',
      //   location: { lat: 51.506724, lng: -0.080987 },
      //   image: ''
      // }
      ]);
    })

    .then(museums => console.log(`${museums.length} museum(s) created`))
    .catch(err => console.log(err))
    .finally(() =>  mongoose.connection.close());
});
