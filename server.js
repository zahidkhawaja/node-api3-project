const express = require('express');
const morgan = require("morgan");

const userRouter = require("./users/userRouter");

const server = express();

//Middleware
server.use(logger);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(`${req.method} Request to ${req.originalUrl}`);
  next();
}

module.exports = server;
