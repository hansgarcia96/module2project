const spaceXAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {


  
  document.getElementById('fetch-missions').onclick = function(){
    spaceXAPI.getNews();    
  }


})
