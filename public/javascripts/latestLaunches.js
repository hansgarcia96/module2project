axios
  .get("https://api.spacexdata.com/v3/launches/past")
  .then(result => {
    let data = result.data;
    // console.log(data)

    // LATEST # OF LAUNCHES
    // CURRENTLY SET TO 6
    let latestLaunches = data.slice(-6).reverse();
    // console.log("These are the last 6 ", latestLaunches)

    var missionName;
    var date;
    var video;
    var article;

    let missionsDiv = $(".lastMissions");

    // three

    missionsDiv.html("");

    for (i = 0; i < latestLaunches.length; i++) {
      missionsDiv.append(
        `
        <div class="lastMissions">
        <div class="patch"><img src=${latestLaunches[i].links.mission_patch} style="width: 200px;"></div>

        <iframe src="https://www.youtube.com/embed/${latestLaunches[i].links.youtube_id}" width="550" height="300" frameborder="0"></iframe>

        <div class="rocket">${latestLaunches[i].rocket.rocket_name}</div>

          <div class="date">${latestLaunches[i].launch_date_utc}</div>
 
          <div class="location">${latestLaunches[i].launch_site.site_name_long}</div>

        </div>
        `
      );
    }
    // MORE DIVS NOT IN USE HERE
    //         <div class="missionName">${lastThree[i].mission_name}</div>
    //         <div class="article">${lastThree[i].links.article_link}</div>
    // single

    for (i = 0; i < latestLaunches.length; i++) {
      // console.log(lastThree[i].mission_name)
      var missionName = latestLaunches[i].mission_name;
      var date = latestLaunches[i].launch_date_utc;
      var video = latestLaunches[i].links.video_link;
      var article = latestLaunches[i].links.article_link;

      console.log("Mission ", missionName);
      console.log("Date ", date);
      console.log("Video ", video);
    }

    console.log(video);
    console.log(missionName);
    console.log(date);
    console.log(article);

    // APPEND TO lastMission div

    // -------------- working single ----------
    // $(".lastMissions").html(
    //   `
    //   <div>${missionName}</div>
    //   `
    // );

    // ------------ end of working single ----------

    // ---------- cruddy way ------------

    // let lastLaunch = data[82];
    // console.log("this is the lastest launch ", lastLaunch);

    // for(let i = 77; i < 82; i++) {
    //   console.log(data[i])
    // }
  }) // END OF .then

  .catch(err => {
    console.log("error my nigga", err);
  });
