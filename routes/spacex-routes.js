const express = require("express");
const router = express.Router();
const axios = require("axios");

// SPACEX API 
const SpacexApiWrapper = require("spacex-api-wrapper");

SpacexApiWrapper.info().then(function(data) {
  console.log(data);
});

SpacexApiWrapper.getNextLaunch().then(function(data) {
  console.log(data);
  
});

module.exports = router;
