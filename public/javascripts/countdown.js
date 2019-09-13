require("dotenv").config();

const moment = require("moment");

axios
  .get("https://api.spacexdata.com/v3/launches/upcoming")
  .then(result => {
    let nextLaunchData = result.data[0];
    let nextLaunchDateLocal = result.data[0].launch_date_local;
    let nextLaunchUtc = result.data[0].launch_date_utc;
    let nextLaunchDate = nextLaunchUtc;
    let formatedDate = moment(nextLaunchUtc).format(
      "dddd, MMMM Do YYYY, h:mm:ss a"
    );

    console.log(formatedDate);

    let missionName = nextLaunchData.mission_name;
    let rocket = nextLaunchData.rocket.rocket_name;
    let site = nextLaunchData.launch_site.site_name_long;
    let details = nextLaunchData.details;

    let convertDate = new Date(nextLaunchUtc);

    // console.log("the next launch data: ", nextLaunchData);
    // console.log("the next launch date-local: ", nextLaunchDateLocal);
    // console.log("the next launch date utc: ", nextLaunchUtc);
    // console.log("the next launch date: ", nextLaunchDate);
    // console.log('the convertDate is: ', convertDate);

    // Access launch details
    let nextMissionName = nextLaunchData.mission_name;
    let nextMissionIntel = nextLaunchData.details;
    let nextMissionRocket = nextLaunchData.rocket.rocket_name;

    // Set the date we're counting down to
    let countDownDate = new Date(convertDate).getTime();

    // Update the count down every 1 second
    let x = setInterval(function() {
      // Get today's date and time
      let now = new Date().getTime();

      // console.log('the countdownDate is: ', countDownDate);
      // console.log("the now time is: ", now);

      // Find the distance between now and the count down date
      let distance = countDownDate - now;
      // console.log('the distance is: ', distance);

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // append to container
      $(".missionName").html(
        `
        <h1>NEXT MISSION: </h1>
        <h1>${missionName}</h1>
        <h3>${rocket}</h3>
        `
      );
      $(".row").html(
        `
        
          <div class="card">
            <div class="card-body">

            <span>
              <h5 class="card-title">${days}</h5>
              <p class="card-text-unit">DAYS</p>
            </span>  
                
            </div>
          </div>

          <div class="card">
            <div class="card-body">

            <span>
              <h5 class="card-title">${hours}</h5>
              <p class="card-text-unit">HOURS</p>
            </span> 

            </div>
          </div>

          <div class="card">
            <div class="card-body">

            <span>
              <h5 class="card-title">${minutes}</h5>
              <p class="card-text-unit">MINUTES</p>
            </span>

            </div>
          </div>

          <div class="card">
            <div class="card-body">

            <span>
              <h5 class="card-title">${seconds}</h5>
              <p class="card-text-unit">SECONDS</p>
            </span>

            </div>
          </div>

          <div class="nextLaunchInfo">
            
            <p class="date">${nextLaunchDate}</p>
            <p class="site">${site}</p>
            <p class="details">${details}</p>
          </div>
   
    `
      );

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        $(".countdown").append("EXPIRED");
      }
    }, 1000);
  })
  .catch(err => {
    console.log("An error occure during upcoming launches", err);
  });

/* 
$('.countdown-container').html(  
  `
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
      <h1 class="display-4">Next Launch: 
      <br>

      <div class="card">
        <div class="card-body">
            <span>${days + `d `} </span>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
            <span>${hours + `h `} </span> 
        </div>
      </div>

      <div class="card">
        <div class="card-body">
            <span>${minutes + `m `} </span>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
            <span>${seconds + `s `} </span>
        </div>
      </div>
 
     
      </h1>

      <p class="lead">Mission Name: <span>${nextMissionName}</span></p>
   
      <p class="lead">Mission Intel: <span><p>${nextMissionIntel}</p></span></p>
  
      <p class="lead">Mission Rocket: <span>${nextMissionRocket}</span></p>
      </div>
    </div>
  `);
 */
