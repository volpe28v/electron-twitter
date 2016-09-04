const Twit = require('twit');
const ENV = process.env;

module.exports = new Twit({
  "consumer_key": ENV.TWIT_CONSUMER_KEY,
  "consumer_secret": ENV.TWIT_CONSUMER_SECRET,
  "access_token": ENV.TWIT_ACCESS_TOKEN,
  "access_token_secret": ENV.TWIT_ACCESS_SECRET
});
