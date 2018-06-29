const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const { port, dbURI } = require('./config/environment');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect(dbURI);

const routes = require('./config/routes');

app.use(express.static(`${__dirname}/public`));


app.use(bodyParser.json());
app.get('/*',(req, res) => res.sendFile(`${__dirname}/public/index.html`)); 
app.use('/api', routes);




app.listen(port, ()=> console.log(`Enjoy the show!${port}`));

module.exports = app;
