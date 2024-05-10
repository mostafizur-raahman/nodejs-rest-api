const express = require("express");
const createHttpError = require("http-errors");
const globalError = require("./middlewares/globalErrorHandler");

const app = express();

// GET , POST , DELETE
app.get("/", (req, res, next) => {
    return res.json({
        message: "Hello World",
    });
});

// Global error handler
app.use(globalError);

module.exports = app;
