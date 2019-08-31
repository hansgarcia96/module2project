const express = require("express");
const router = express.Router();

var https = require('https');

var options = {
  'method': 'GET',
  'hostname': 'api.spacexdata.com',
  'path': '/v3/rockets/?falcon9',
  'headers': {
  }
};

var req = https.request(options, function (res) {
  var chunks = [];
  //console.log("THE FUCKKKK: ",req);

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData = "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; ------WebKitFormBoundary7MA4YWxkTrZu0gW--";

req.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');

req.write(postData);

req.end();



module.exports = router;