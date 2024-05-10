const config = require("../config/config");
const createHttpError = require("http-errors");

// global error handler
const globalError = (error, req, res, next) => {
    const status = error.statusCode || 500;

    return res.status(status).json({
        message: error.message,
        errorStack: config.env == "development" ? error.stack : "",
    });
};

module.exports = globalError;
