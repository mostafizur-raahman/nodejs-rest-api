const express = require("express");
const createBook = require("./bookController");

const bookRouter = express.Router();

// routes
bookRouter.post("/", createBook);

module.exports = bookRouter;
