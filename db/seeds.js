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
        name: 'Art',
        category: 'science',
        address: 'London',
        location: { lat: 51.506724, lng: -0.080987 },
        image: '/assets/Museum/Art/NationalArtGallery/frontPage-nationalArtMuseum.png'
      }, {
        name: 'History',
        category: 'science',
        address: 'London',
        location: { lat: 51.506724, lng: -0.080987 },
        image: '/assets/Museum/History/Bristish-Museum/FrontPage-british-museum.jpg'
      },{
        name: 'Science',
        category: 'science',
        address: 'London',
        location: { lat: 51.506724, lng: -0.080987 },
        image: '/assets/Museum/Science/Science-Oxford/FrontPage-ScienceOxford.jpg'
      }
      //   name: 'London Art Museum',
      //   category: 'science',
      //   address: 'London',
      //   location: { lat: 51.506724, lng: -0.080987 },
      //   image: ''
      //
      // },{
      //   name: 'London Art Museum',
      //   category: 'science',
      //   address: 'London',
      //   location: { lat: 51.506724, lng: -0.080987 },
      //   image: ''
      // },{
      //   name: 'London Art Museum',
      //   category: 'science',
      //   address: 'London',
      //   location: { lat: 51.506724, lng: -0.080987 },
      //   image: ''
      // },{
      //   name: 'London Art Museum',
      //   category: 'science',
      //   address: 'London',
      //   location: { lat: 51.506724, lng: -0.080987 },
      //   image: ''
      // },{
      //   name: 'London Art Museum',
      //   category: 'science',
      //   address: 'London',
      //   location: { lat: 51.506724, lng: -0.080987 },
      //   image: ''
      // },{
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
