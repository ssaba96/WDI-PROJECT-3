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
        name: 'London History Museum',
        category: 'science',
        address: 'London',
        location: { lat: 51.506724, lng: -0.080987 },
        image: '/assets/london-history-museum.jpg'
      }, {
        name: 'London Science Museum',
        category: 'science',
        address: 'London',
        location: { lat: 51.506724, lng: -0.080987 },
        image: '/assets/science-images.jpeg'
      },{
        name: 'London Science Museum',
        category: 'science',
        address: 'London',
        location: { lat: 51.506724, lng: -0.080987 },
        image: '/assets/team-art-museum-hebe_02.jpg'
      },{
        name: 'London Art Museum',
        category: 'science',
        address: 'London',
        location: { lat: 51.506724, lng: -0.080987 },
        image: 'assets/london-natural-history-museum-earth-galleries.jpg'

      }]);
    })

    .then(museums => console.log(`${museums.length} museum(s) created`))
    .catch(err => console.log(err))
    .finally(() =>  mongoose.connection.close());
});
