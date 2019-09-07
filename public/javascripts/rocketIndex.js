const spaceXAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {


  document.getElementById('fetch-all').onclick = function(){
    spaceXAPI.getFullListRockets();

  }
  
  document.getElementById('fetch-one').onclick = function(){
    spaceXAPI.getOneRocket();
  }


})
