const navigations = require('./navigation.json')
const rankings = require('./ranking.json')
const billboards = require('./billboards.json')
const directs = require('./directs.json')
const banner = require('./banner.json')
const hotFocus = require('./hotFocus.json')

exports.handler = async function (event) {
  const { apiKey, requestName } = event.queryStringParameters
  const jsonFiles = {
    navigations,
    rankings,
    billboards,
    directs,
    banner,
    hotFocus
  }

  if ('1216' !== apiKey) {
    return {
      statusCode: 401,
      body: 'Invalid API key!'
    }
  }

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET'
    },
    body: JSON.stringify(jsonFiles[requestName])
  }
}
