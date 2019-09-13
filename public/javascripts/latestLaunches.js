axios
  .get("https://api.spacexdata.com/v3/launches/past")
  .then(result => {
    let data = result.data;
    // console.log(data)

    let lastThree = data.slice(-3);
    // console.log("These are the last 3 ", lastThree)

    var missionName = {};
    var date;
    var video;
    var article;

    let missionsDiv = $(".lastMissions");

    // three

    missionsDiv.html("");

    for (i = 0; i < lastThree.length; i++) {
      missionsDiv.append(
        `
        <div class="lastMissions">
          <div class="missionName">${lastThree[i].mission_name}</div>
          <div class="date">${lastThree[i].launch_date_utc}</div>
          <div class="rocket">${lastThree[i].rocket.rocket_name}</div>
          <div class="location">${lastThree[i].launch_site.site_name_long}</div>
          <div class="video">${lastThree[i].links.video_link}</div>
          <div class="article">${lastThree[i].links.article_link}</div>
        </div>
        `
      );
    }

    // single

    for (i = 0; i < lastThree.length; i++) {
      // console.log(lastThree[i].mission_name)
      var missionName = lastThree[i].mission_name;
      var date = lastThree[i].launch_date_utc;
      var video = lastThree[i].links.video_link;
      var article = lastThree[i].links.article_link;

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
