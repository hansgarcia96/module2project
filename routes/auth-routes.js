const express = require("express");
const router = express.Router();

// password stuff
const bcrypt = require("bcryptjs");
const bcryptSalt = 12;
const passport = require("passport");


// User model
const User           = require("../models/User");

// GET Sign-up route
router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

// Post Sign-up route
router.post("/signup", (req, res, next) => {
  
  const email    = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const image    = req.body.image;

  // validate username and password
  if (username === "" || password === "") {
    res.render("auth/signup", { message: "Indicate username and password" });
    return;
  }

  // check to see if indicated username is already defined in the database
  User.findOne({ username })
    .then(user => {
      if (user !== null) {
        res.render("auth/signup", { message: "The username already exists" });
        return;
      }

      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      // creating the new user with User model schema
      const newUser = new User({
        email,
        username,
        password: hashPass,
        image
      });

      newUser.save(err => {
        if (err) {
          res.render("auth/signup", { message: "Something went wrong" });
        } else {
          res.redirect("/");
        }
      });
    })
    .catch(error => {
      next(error);
    });
});

// GET log-in
router.get("/login", (req, res, next) => {
  res.render("auth/login");
});

// POST login
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
    passReqToCallback: true
  })
);

// GET logout
router.get("/logout", (req,res, next) =>{
  req.logout();
  res.redirect("/")
});

module.exports = router;
