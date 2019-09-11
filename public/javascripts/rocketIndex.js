const spaceXAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {



  spaceXAPI.getFullListRockets();

  
  
  document.getElementById('fetch-one').onclick = function(){
    spaceXAPI.getOneRocket();
  }


})
