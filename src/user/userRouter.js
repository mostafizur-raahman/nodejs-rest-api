const express = require("express");
const { createuser } = require("./userController");

const userRouter = express.Router();

// routes
userRouter.post("/register", createuser);
module.exports = userRouter;
