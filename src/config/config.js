require("dotenv").config();

const _config = {
    port: process.env.PORT,
    databaseURL: process.env.MONGO_CONNECTION_STRING,
};

const config = Object.freeze(_config);

module.exports = config;
