const express = require("express");
const router = express.Router();
const axios = require("axios");
const moment = require("moment");

// SPACEX API
const SpacexApiWrapper = require("spacex-api-wrapper");

<<<<<<< HEAD
// SpacexApiWrapper.info().then(function(data) {
//   console.log(data);
// });

SpacexApiWrapper.getNextLaunch().then(function(data) {
  let launchDate = data.launch_date_local;
console.log("the launchdate is " + launchDate)

// SpacexApiWrapper.getAllRockets().then(function(data) {
//   let rocketName = data.rocket_name
//   console.log(rocketName)
// })


// COUNTDOWN 
  let now = moment().format();
  console.log("now is " + now);

  var theDay = moment().format(); 
  console.log("the day is " + theDay)

  let fromNow = moment(launchDate).endOf(launchDate).fromNow()

  console.log(`The moment starts ` + fromNow)

=======
SpacexApiWrapper.info().then(function(data) {
  //console.log(data);
});

SpacexApiWrapper.getNextLaunch().then(function(data) {
  //console.log(data);
>>>>>>> 79445fdab003e10a82c0048676c37b7ec800da9c
});


module.exports = router;
