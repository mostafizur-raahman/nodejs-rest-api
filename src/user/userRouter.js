const express = require("express");
const { createuser, loginUser } = require("./userController");

const userRouter = express.Router();

// routes
userRouter.post("/register", createuser);
userRouter.post("/login", loginUser);
module.exports = userRouter;
