const mongoose = require("mongoose");
const config = require("./config");

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("Connected to database");
        });

        mongoose.connection.on("error", () => {
            console.log("Error in connecting to database");
        });

        await mongoose.connect(config.databaseURL);
    } catch (error) {
        console.error("failed to connect database ", error);
        process.exit(1);
    }
};

module.exports = connectDB;
