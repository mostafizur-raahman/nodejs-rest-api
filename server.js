const App = require("./src/app.js");

const server = new App();

const serverStart = () => {
    const PORT = process.env.PORT || 3001;

    server.app.listen(() => {
        console.log(`Server is running on port ${PORT}`);
    });
};

// server start
serverStart();
