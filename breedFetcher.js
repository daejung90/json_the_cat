const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    // console.log('statusCode:', response && response.statusCode);
    // console.log('Successfully Connected!');
        
    const data = JSON.parse(body);
          
    if (error) {
      callback(error, null);
    }
          
    if (data[0]) {
      callback(null, 'Origin: ' + data[0].origin);
    } else {
      callback("Could not find breed", null);
    }
  });
};

module.exports = fetchBreedDescription;




