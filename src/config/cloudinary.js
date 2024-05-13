const {
    cloudinaryCloud,
    cloudinaryApiKey,
    cloudinaryApiSecert,
} = require("./config");

const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: cloudinaryCloud,
    api_key: cloudinaryApiKey,
    api_secret: cloudinaryApiSecert,
});

module.exports = cloudinary;
