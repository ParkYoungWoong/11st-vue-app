exports.handler = async function () {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'Heropy',
      age: 85,
      email: 'thesecon@gmail.com'
    })
  }
}
