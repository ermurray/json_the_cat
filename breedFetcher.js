const request = require('request');

const url = 'https://api.thecatapi.com/v1/breeds/search';
const breed = process.argv[2];
const query = `${url}?q=${breed}`;


request(query, (error, response, body) => {
  if (error) {
    return console.log('not valid url');
  }
  const data = JSON.parse(body);
  console.log(error);
  if (data[0] === undefined) {
    console.log(`No such breed of ${breed} found`);
  } else {
    console.log(data[0].description);
  }
  
});