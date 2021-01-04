exports.handler = async function (event) {
  const { apiKey, searchText } = event.queryStringParameters;

  console.log('searchText: ', process.env.API_KEY, apiKey)

  if (process.env.API_KEY !== apiKey) {
    return {
      statusCode: 401,
      body: 'Invalid API key!'
    };
  }

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/plain; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET'
    },
    body: `https://trusting-williams-8cacfb.netlify.app/search/${searchText}`
  };
}
