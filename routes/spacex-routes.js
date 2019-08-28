const express = require("express");
const router = express.Router();
const axios = require("axios");
const moment = require("moment");

// SPACEX API
const SpacexApiWrapper = require("spacex-api-wrapper");

// SpacexApiWrapper.info().then(function(data) {
//   console.log(data);
// });

SpacexApiWrapper.getNextLaunch().then(function(data) {
  let launchDate = data.launch_date_local;
  console.log(launchDate)

  // UNIX TIME
  let launchDateUnix = data.launch_date_unix;
    // console.log(moment(launchDateUnix));
  let launchDateUTC = data.launch_date_utc;
    console.log(moment(launchDateUTC).format())


// console.log("the launchdate is " + launchDate)

// SpacexApiWrapper.getAllRockets().then(function(data) {
//   let rocketName = data.rocket_name
//   console.log(rocketName)
// })


// COUNTDOWN 
// Working Date with Broad Time
  // let now = moment().format();
  // console.log("now is " + now);

  // var theDay = moment().format(); 
  // console.log("the day is " + theDay)

  // let fromNow = moment(launchDate).endOf(launchDate).fromNow()

  // console.log(`The moment starts ` + fromNow)



});


// Second Try
// let now = moment();
// console.log(now);


module.exports = router;
