const request = require('request');
const argv = process.argv.slice(2);

request('https://api.thecatapi.com/v1/breeds/search?q=' + argv, (error, response, body) => {
  console.log('statusCode:', response && response.statusCode);
  console.log('Successfully Connected!');
  const data = JSON.parse(body);
    
  if (error) {
    console.log(error, null);
  }
    
  if (data[0]) {
    console.log('Origin: ' + data[0].origin);
  } else {
    console.log("Could not find breed");
  }
});





