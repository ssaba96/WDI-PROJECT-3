const port = 4000;
const env = process.env.NODE_ENV || 'dev';
const dbURI = `mongodb://localhost/museum-api-${env}`;
const secret = 'dsde=-03ddcd';

module.exports = { port, dbURI, secret };
