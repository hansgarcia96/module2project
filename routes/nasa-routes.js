const express = require("express");
const router = express.Router();
const axios = require("axios");

let nasaApi =
  "https://api.nasa.gov/planetary/apod?api_key=l3UCNqsJiwwnylLaPuctuGF6khi50dYWiHqTqIub";

axios
  .get(
    "https://api.nasa.gov/planetary/apod?api_key=l3UCNqsJiwwnylLaPuctuGF6khi50dYWiHqTqIub"
  )
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log("Its not working");
  });

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
