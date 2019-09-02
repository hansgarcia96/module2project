const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/testing', (req, res, next) => {
  let data = {
    layout: false
  }
  res.render('spacex/spaceX', data);
});

module.exports = router;
