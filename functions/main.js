require('dotenv').config();
const navDrawers = require('./nav_drawer.json');
const rankings = require('./ranking.json');

exports.handler = async function (event) {
  const { apiKey, requestName } = event.queryStringParameters;
  const jsonFiles = {
    navDrawers,
    rankings
  };

  if (process.env.API_KEY !== apiKey) {
    return {
      statusCode: 401,
      body: 'Invalid API key!'
    };
  }

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(jsonFiles[requestName])
  };
}
