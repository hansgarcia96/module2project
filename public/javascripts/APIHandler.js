class APIHandler {

  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    const container = $('.characters-container')

    axios.get('https://api.spacexdata.com/v3/rockets')
    .then((result) => {

      console.log("the object is: ", result);
      container.html("");

      // display the data
      result.data.map((eachRocket) => {
        let list = 
        `
        <div class="character-info">
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

  getOneRegister () {
    const container = $('.characters-container')
    const theId     = $('input[name=character-id]').val(); 
    
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
        <div class="character-info">
          <div class="name">Rocket ID:  <span>${theRocket.data.id}</span></div>
          <div class="name">Rocket NAME: <span>${theRocket.data.rocket_name}<span></div>
          <div class="weapon">Rocket Description: <span>${theRocket.data.description}</span></div>
          <div class="image"> <img src="${theRocket.data.flickr_images[0]}"> </div>
        </div>
      `
      container.append(singleRocket);
      $('input[name=character-id').val('');
    })
  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
