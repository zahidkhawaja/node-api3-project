const express = require('express');
const morgan = require("morgan");

const userRouter = require("./users/userRouter");

const server = express();

server.use(logger);
server.use(express.json());
server.use("/api/users", userRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//Middleware
function logger(req, res, next) {
  console.log(`${req.method} Request to ${req.originalUrl} at ${new Date()}`);
  next();
}

module.exports = server;
