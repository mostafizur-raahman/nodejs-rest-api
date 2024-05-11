const express = require("express");
const createBook = require("./bookController");
const multer = require("multer");
const path = require("path");

const bookRouter = express.Router();

const upload = multer({
    dest: path.resolve(__dirname, "../../public/data/uploads"),
    limits: { fileSize: 3e7 }, // 30 mb
});
// routes
bookRouter.post(
    "/",
    upload.fields([
        { name: "coverImage", maxCount: 1 },
        { name: "file", maxCount: 1 },
    ]),
    createBook
);

module.exports = bookRouter;
