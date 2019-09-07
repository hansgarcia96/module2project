class APIHandler {

  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullListRockets () {

    const container = $('.rockets-container')

    axios.get('https://api.spacexdata.com/v3/rockets')
    .then((result) => {

      console.log("the object is: ", result);
      container.html("");

      // display the data
      result.data.map((eachRocket) => {
        let list = 
        `
        <div class="rocket-info">
            <div class="name"> Rocket Id: <span>${eachRocket.id}</span></div>
            <div class="name">Rocket Name: <span>${eachRocket.rocket_name}</span></div>
            <div class="occupation">Description: <span>${eachRocket.description}</span></div>
            <div class="image">  <img src="${eachRocket.flickr_images[0]}"> </div>
         </div>         
        `
        // append to container
        container.append(list);
      })
    })
    .catch((err) => {
      console.log("An error occure during getFullList()", err);
    })
  }

  getOneRocket () {

    const container = $('.rockets-container')
    const theId     = $('input[name=rocket-id]').val(); 
    
    axios.get(`https://api.spacexdata.com/v3/rockets/${theId}`)
    .then((theRocket) => {

      console.log("the single rocket is: ", theRocket);
      console.log("the rocket id: ", theRocket.data.id);
      console.log("the rocket name is: ", theRocket.data.rocket_name);
      console.log("the flicker: ", theRocket.data.flickr_images[0]);
      container.html("");

      // Display information
      let singleRocket = 
      `
        <div class="rocket-info">
          <div class="name">Rocket ID:  <span>${theRocket.data.id}</span></div>
          <div class="name">Rocket NAME: <span>${theRocket.data.rocket_name}<span></div>
          <div class="weapon">Rocket Description: <span>${theRocket.data.description}</span></div>
          <div class="image"> <img src="${theRocket.data.flickr_images[0]}"> </div>
        </div>
      `
      container.append(singleRocket);
      $('input[name=rocket-id').val('');
    })
  }

  getFullListMissions () {

    const container = $('.missions-container')

    axios.get('https://api.spacexdata.com/v3/missions')
    .then((result) => {

      console.log("the mission object is: ", result);
      container.html("");

      // display the data
      result.data.map((eachMission) => {
        
        let list = 
        `
        <div class="mission-info">
            <div class="name"> Name: <span>${eachMission.mission_name}</span></div>
            <div class="wikipedia">Wikipida: <span>${eachMission.wikipedia}</span></div>
            <div class="twitter">Twitter: <span>${eachMission.twitter}</span></div>
            <div class="description"> <span>${eachMission.description}</span> </div>
         </div>         
        `
        // append to container
        container.append(list);
      })
    })
    .catch((err) => {
      console.log("An error occure during getFullListMissions()", err);
    })
  }

  getOneMission () {

    const container = $('.missions-container')
    const theId     = $('input[name=mission-id]').val(); 
    
    axios.get(`https://api.spacexdata.com/v3/missions/${theId}`)
    .then((singleMission) => {

      console.log("the single mission name is: ", singleMission.data.mission_name);


      container.html("");

      // Display information
      let mission = 
      `
      <div class="mission-info">
          <div class="name"> Name: <span>${singleMission.data.mission_name}</span></div>
          <div class="wikipedia">Wikipida: <span>${singleMission.data.wikipedia}</span></div>
          <div class="twitter">Twitter: <span>${singleMission.data.twitter}</span></div>
          <div class="description"> <span>${singleMission.data.description}</span> </div>
       </div>         
      `
      container.append(mission);
      $('input[name=mission-id').val('');
    })
    .catch((err) => {
      console.log("An error occure during getOneMission()", err);
    })
  }


}
