const express = require("express");
const createHttpError = require("http-errors");
const globalError = require("./middlewares/globalErrorHandler");
const morgan = require("morgan");

const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));

// GET , POST , DELETE
app.get("/", (req, res, next) => {
    return res.json({
        message: "Hello World",
    });
});

// Routes
const userRouter = require("./user/userRouter");
const bookRouter = require("./book/bookRouter");

app.use("/api/users", userRouter);
app.use("/api/books", bookRouter);

// Global error handler
app.use(globalError);

module.exports = app;
