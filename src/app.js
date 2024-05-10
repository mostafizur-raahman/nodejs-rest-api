const express = require("express");
const createHttpError = require("http-errors");
const globalError = require("./middlewares/globalErrorHandler");

const app = express();

// middleware
app.use(express.json());

// GET , POST , DELETE
app.get("/", (req, res, next) => {
    return res.json({
        message: "Hello World",
    });
});

// Routes
const userRouter = require("./user/userRouter");

app.use("/api/users", userRouter);
// Global error handler
app.use(globalError);

module.exports = app;
