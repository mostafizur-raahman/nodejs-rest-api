const app = require("./src/app.js");

const serverStart = () => {
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

// server start
serverStart();
