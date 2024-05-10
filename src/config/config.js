require("dotenv").config();

const _config = {
    port: process.env.PORT,
};

const config = Object.freeze(_config);

module.exports = config;
