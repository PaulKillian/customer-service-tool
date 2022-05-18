const request = require('request-promise')
const cheerio = require('cheerio')

request('https://www.classicindustries.com/shop/1963/chevrolet/impala/parts/?q=side%20Molding', 
    function (error, response, body) {
        // console.error('error:', error); // Print the error if one occurred
        // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
  });
