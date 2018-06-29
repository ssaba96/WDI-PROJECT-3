const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'dev';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/museum-api-${env}`;
const secret = 'dsde=-03ddcd';

module.exports = { port, dbURI, secret };
