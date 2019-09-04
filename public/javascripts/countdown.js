

axios.get('https://api.spacexdata.com/v3/launches/upcoming')
.then((result) => {

  let  nextLaunchData      = result.data[0];
  let  nextLaunchDateLocal = result.data[0].launch_date_local;
  let  nextLaunchUtc       = result.data[0].launch_date_utc;
  let  nextLaunchDate      = nextLaunchUtc;

  let  convertDate         = new Date(nextLaunchUtc);
  
  console.log("the next launch data: ", nextLaunchData);
  console.log("the next launch date-local: ", nextLaunchDateLocal);
  console.log("the next launch date utc: ", nextLaunchUtc);
  console.log("the next launch date: ", nextLaunchDate);
  console.log('the convertDate is: ', convertDate);


  // Access launch details
  let nextMissionName  = nextLaunchData.mission_name;
  let nextMissionIntel = nextLaunchData.details; 
  let nextMissionRocket       = nextLaunchData.rocket.rocket_name;
  
  // Set the date we're counting down to
  let countDownDate = new Date(convertDate).getTime();
  
  // Update the count down every 1 second
  let x = setInterval(function() {
  
    // Get today's date and time
    let now = new Date().getTime();
  
    console.log('the countdownDate is: ', countDownDate);
    console.log("the now time is: ", now);
  
    // Find the distance between now and the count down date
    let distance = countDownDate  - now;
    console.log('the distance is: ', distance);
    
  
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // append to container
    $('.countdown-container').html(  
    `
      <br>
      <div class="countdown-container">
      <div class="countdown">Next Launch Countdown: <span>${days + `d ` + hours + `h ` + minutes + `m ` + seconds + `s `}</span></div>
      <br>
      <div class="mission-name">Mission Name: <span>${nextMissionName}</span></div>
      <br>
      <div class="mission-intel">Mission Intel: <span><p>${nextMissionIntel}</p></span></div>
      <br>
      <div class="mission-rocket">Mission Rocket: <span>${nextMissionRocket}</span></div>
      </div>
    `);
  
    // If the count down is finished, write some text 
    if (distance < 0) {
      clearInterval(x);
      $(".countdown").append("EXPIRED");
    }
  }, 1000);


})
.catch((err) => {
  console.log("An error occure during upcoming launches", err);
})


