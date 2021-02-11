const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it('returns a error for a non valid breed, via callback', (done) => {
    fetchBreedDescription('dude', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, 'No such breed of dude found');

      const expectedDesc = null;

      assert.equal(expectedDesc, null);

  

      done();
    });
  });
  
  // it('returns a error with status code 404 for a invalid pathname, via callback', (done) => {
  //   fetchBreedDescription('siberian', (err, desc) => {
  //     // we expect no error for this scenario
  //     assert.equal(err, '404');

  //     const expectedDesc = null;

  //     assert.equal(expectedDesc, null);

  

  //     done();
  //   });
  // });


});