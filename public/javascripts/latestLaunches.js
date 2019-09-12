axios
  .get("https://api.spacexdata.com/v3/launches/past")
  .then(result => {
    let data = result.data;
    // console.log(data)
    let lastLaunch = data[82];
    console.log("this is the lastest launch ", lastLaunch);

    for(let i = 77; i < 82; i++) {
    
      console.log(data[i])
    }
  })

  .catch(err => {
    console.log("error my nigga", err);
  });
