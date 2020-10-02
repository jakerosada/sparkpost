const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

//Array to hold the user information objects
let info = [];

//GET route to get back all users
router.get("/", (req, res) => {
  res.json(info);
});

//GET route to get back specific user
router.get("/:name", (req, res) => {
  let found = false;
  let userName = req.params.name;
  info.forEach((userObj) => {
    if (userObj.name.replace(/\s/g, "") === userName) {
      res.json(userObj);
      found = true;
    }
  });
  if (!found) {
    res.send(`User ${userName} not found`);
  }
});

//POST Route for a new user
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("age", "Age must be a number").isInt(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let found = false;
    const { name, age } = req.body;
    info.forEach((userObj) => {
      if (userObj.name === name && userObj.age === age) {
        found = true;
        res.status(200).json({ message: "User Already Exists!", name, age });
      }
    });
    if (!found) {
      info.push({ name, age });
      res.status(200).json({ message: "Succesfully Added!", name, age });
    }
  }
);

//PUT route to update a users age
router.put(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("age", "Age must be a number").isInt(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let found = false;
    const { name, age } = req.body;
    info.forEach((userObj) => {
      if (userObj.name === name) {
        userObj.age = age;
        found = true;
        res.status(200).json({ message: "Succesfully Updated!", name, age });
      }
    });
    if (!found) {
      res
        .status(200)
        .json({ message: "User does not already exist!", name, age });
    }
  }
);

module.exports = router;
