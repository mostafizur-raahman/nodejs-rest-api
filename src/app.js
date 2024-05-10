const express = require("express");

const app = express();

// GET , POST , DELETE
app.get("/", (req, res, next) => {
    // 47
    return res.json({
        message: "Hello World",
    });
});

module.exports = app;
