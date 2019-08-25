const express = require("express");
const router = express.Router();
const axios = require("axios");

// let nasaApi =
//   "https://api.nasa.gov/planetary/apod?api_key=l3UCNqsJiwwnylLaPuctuGF6khi50dYWiHqTqIub";


// const nasaApi = axios.create({
//     baseURL: 'https://api.nasa.gov/planetary/apod?api_key=SgXTB67gSWsxf28q1AWTVhPHv5sFG21xsZnUskIt'
// });

// function getNasaApi()


// WORKING WITH AXIOS
axios
  .get(
    "https://api.nasa.gov/planetary/apod?api_key=l3UCNqsJiwwnylLaPuctuGF6khi50dYWiHqTqIub"
  )
  .then(response => {
    return response;
  })
  .then(data => {
    //console.log(data);
  })
  .catch(err => {
    console.log("Its not working");
  });

// NOT WORKING FETCH
// function getNasa() {
//   fetch("nasaApi.json")
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//     });
// }
// console.log(getNasa)

// function getNasa() {
//   fetch(nasaApi)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//     });
// }


router.get("/nasa", (req, res, next) => {
  // var req = new XMLHttpRequest();
  // var url = "https://api.nasa.gov/planetary/apod?api_key=";
  // var api_key = "5B6oJsSCQyekXZvNOKpsUhRPl1e7FHqjIAyHpybk";

  // req.open("GET", url + api_key);
  // req.send();

  // req.addEventListener("load", function() {
  //   if (req.status == 200 && req.readyState == 4) {
  //     var response = JSON.parse(req.responseText);
  //     document.getElementById("title").textContent = response.title;
  //     document.getElementById("date").textContent = response.date;
  //     document.getElementById("pic").src = response.hdurl;
  //     document.getElementById("explanation").textContent = response.explanation;
  //   }
  // });

  res.render("nasa/nasa");
});

// router.get("https://api.nasa.gov/planetary/apod");

module.exports = router;
