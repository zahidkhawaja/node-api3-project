const express = require('express');
const router = express.Router();
const User = require("./userDb");
const Post = require("../posts/postDb");

// GET all users
router.get('/', (req, res) => {
  User.get()
  .then(users => {
    res.status(200).json(users);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: "Error getting users."})
  })
});

// GET user by ID
router.get('/:id', (req, res) => {
  User.getById(req.params.id)
  .then(user => {
    res.status(200).json(user)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: "Cannot retrieve user."})
  })
});

// POST user
router.post('/', (req, res) => {
  User.insert(req.body)
  .then(users => {
    res.status(201).json(users)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: "Cannot add user."})
  })
});

// PUT user
router.put('/:id', (req, res) => {
  // do your magic!
});

// DELETE user
router.delete('/:id', (req, res) => {
  User.remove(req.params.id)
  .then(count => {
    count > 0 ? res.status(200).json({ message: "User has been deleted."}) : res.status(404).json({ message: "Cannot find user."})
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: "Error removing user."})
  })
});

// GET posts by user ID
router.get('/:id/posts', (req, res) => {
  // do your magic!
});

// POST posts by user ID
router.post('/:id/posts', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
