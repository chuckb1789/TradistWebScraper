// require the nightmare library
var Nightmare = require('nightmare');

// create a new browser window

var protectionData = [];
for (var i=0; i<32; i++) {
    var nightmare = Nightmare({ show: true });

    var scraperURL = 'https://www.mountainproject.com/v/the-bastille---n-face/105744723'
    var scraperClick = '#leftNavRoutes > tbody > tr:nth-child('+(i+1).toString()+') > td:nth-child(3) > a'
      nightmare
          .goto(scraperURL)
          .wait(8000)
          .click(scraperClick)
          .wait(8000)

          // evaluate code IN THE NIGHTMARE BROWSER
          .evaluate(function () {

              // pass data from the nightmare browser back to this express app
              return $('#rspCol800').text();
          })

          // close the browser window
          .end()
          // the result passed into this function is the value we returned from evaluate
          .then(function (result) {
              console.log(result)
              protectionData[i] = result
          })
          .catch(function (error) {
              console.error('Search failed:', error);
          });
  // console.log(scraperClick)
  }
