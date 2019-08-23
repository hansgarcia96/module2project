const express = require("express");
const router = express.Router();

router.get("/nasa", (req, res, next) => {
  res.render("nasa/nasa");
});


module.exports = router;
