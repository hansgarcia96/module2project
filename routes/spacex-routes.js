const express = require("express");
const router = express.Router();
const axios = require("axios");
const moment = require("moment");

// // SPACEX API
// const SpacexApiWrapper = require("spacex-api-wrapper");
// const spacexAPI = new SpacexApiWrapper();


// function countdown(newLaunchTime) {
//   let countDownDate = new Date(newLaunchTime).getTime();

//   // Update the count down every 1 second
//   let x = setInterval(function() {
//     // Get today's date and time
//     let now = new Date().getTime();

//     // Find the distance between now and the count down date
//     let distance = countDownDate - now;

//     // Time calculations for days, hours, minutes and seconds
//     let days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     let hours = Math.floor(
//       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );
//     let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     // Display the result in the element with id="demo"
//     // console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
 
//     // If the count down is finished, write some text
//     if (distance < 0) {
//       clearInterval(x);
//       console.log("EXPIRED");
//     }
//   }, 1000);
// }

// SpacexApiWrapper.getNextLaunch().then(function(data) {
//   let missionName = data.mission_name;
//   console.log(missionName);

//   let launchtime = data.launch_date_utc;
//   // console.log(launchtime);

//   console.log(countdown(launchtime));
// });

// router.get('/countdown', (req, res, next) => {
//   spacexAPI.getNextLaunch()
//     .then(nextLaunch => {
//       res.render("countdown", nextLaunch[0])
//       console.log(nextLaunch[0])
//     })
// })
















// SPACEX-HOME ROUTE
// router.get("/spacex", (req, res, next) => {

// SpacexApiWrapper.info().then(function(data) {
  
//   console.log(data)
// });

// SpacexApiWrapper.getPastLaunches().then(function(data) {
//   return data.json()

  // let flightNumber = data;
  // console.log("result of pictureLinks", flightNumber);
// });




module.exports = router; // last line
