const rocketsAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {


  document.getElementById('fetch-all').onclick = function(){
    rocketsAPI.getFullList();

  }
  
  document.getElementById('fetch-one').onclick = function(){
    rocketsAPI.getOneRegister();
  }
  
/*   document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  } */


})
