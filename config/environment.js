const port = 4000;
const env = process.env.NODE_ENV || 'dev';
const dbURI = `mongodb://localhost/museum-api-${env}`;


module.exports = { port, dbURI };
