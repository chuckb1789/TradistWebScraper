// require the nightmare library
var Nightmare = require('nightmare');

// create a new browser window
var nightmare = Nightmare({ show: true });

nightmare
    .goto('https://www.mountainproject.com/v/the-bastille---n-face/105744723')
    .click("#leftNavRoutes > tbody > tr:nth-child(1) > td:nth-child(3) > a")
    .wait(5000)

    // evaluate code IN THE NIGHTMARE BROWSER
    .evaluate(function () {

        // pass data from the nightmare browser back to this express app
        return $('#rspCol800 > div:nth-child(15)').text();
    })

    // close the browser window
    .end()
    // the result passed into this function is the value we returned from evaluate
    .then(function (result) {
        console.log(result)
    })
    .catch(function (error) {
        console.error('Search failed:', error);
    });
