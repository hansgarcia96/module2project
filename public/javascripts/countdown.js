document.addEventListener('DOMContentLoaded', () => {
  const container = $(".countdown-info");

  console.log('IronGenerator JS imported successfully!');
  container.html("");
  container.append("hello world");






// const express = require("express");
// const router = express.Router();
// const axios = require("axios");
// const moment = require("moment");
// const SpacexApiWrapper = require("spacex-api-wrapper");

function countdown(newLaunchTime) {
  let countDownDate = new Date(newLaunchTime).getTime();

  // Update the count down every 1 second
  let x = setInterval(function() {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    let result = (days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
return result 
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      console.log("EXPIRED");
    }
  }, 1000);
}



// SpacexApiWrapper.getNextLaunch().then(function(data) {
//   let missionName = data.mission_name;
//   console.log(missionName);

//   let launchtime = data.launch_date_utc;
//   console.log(launchtime);

//   console.log(countdown(launchtime));
// });



// console.log(container)

$(document).ready(() => {
  
});

container.append(countdown("Jan 5, 2021 15:37:25"));

let theCountdown = 
`
<div class="countdown-info">
<div class="name"> Countdown: <span>${countdown("Jan 5, 2021 15:37:25")}</span></div>

</div>     


`

container.append(theCountdown);
}, false);