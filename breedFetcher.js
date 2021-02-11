const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search';
  const query = `${url}?q=${breedName}`;
  request(query, (error, response, body) => {
    if (error) {
      return callback(error, null);
    } else if (response.statusCode === 404) { // incase typo is not domain but in the file path.
      return callback(response.statusCode, null);
    }
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      return callback(`No such breed of ${breedName} found`, null);
    } else {
      return callback(null, data[0].description);
    }
  });
 
};

module.exports = { fetchBreedDescription };