const app = require("./src/app.js");
const config = require("./src/config/config.js");
const connectDB = require("./src/config/db.js");

const serverStart = async () => {
    await connectDB();

    const PORT = config.port || 3000;

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

// server start
serverStart();
