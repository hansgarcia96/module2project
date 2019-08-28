const express = require("express");
const router = express.Router();
const axios = require("axios");
const moment = require("moment");

// SPACEX API
const SpacexApiWrapper = require("spacex-api-wrapper");

// GET NEXT LAUNCH INFO FROM SPACEX API
SpacexApiWrapper.getNextLaunch().then(function(data) {
  let launchDate = data.launch_date_local;
  console.log(launchDate);

  // UNIX TIME
  let launchDateUnix = data.launch_date_unix;
  let launchDateUTC = data.launch_date_utc;

  // formated date to work with the countdown
  perfectLaunchDate = moment(launchDateUTC).format("MMM D, YYYY HH:mm:ss");
  console.log(perfectLaunchDate);

  // COUNTDOWN

  // VERSION 2
  // Set the date we're counting down to
  var countDownDate = new Date(perfectLaunchDate).getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      console.log("EXPIRED");
    }
  }, 1000);

  // VERSION 1
  // Working Date with Broad Time
  // let now = moment().format();
  // console.log("now is " + now);

  // var theDay = moment().format();
  // console.log("the day is " + theDay)

  // let fromNow = moment(launchDate).endOf(launchDate).fromNow()

  // console.log(`The moment starts ` + fromNow)
}); // end of get next launch route


SpacexApiWrapper.info().then(function(data) {
  // console.log(data);
});



module.exports = router;
