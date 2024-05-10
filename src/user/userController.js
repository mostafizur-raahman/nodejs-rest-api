const createHttpError = require("http-errors");

const createuser = async (req, res, next) => {
    const { name, email, password } = req.body;

    // validation
    if (!name || !email || !password) {
        const error = createHttpError(400, "Please provide all fields");
        return next(error);
    }

    res.json({});
};

module.exports = {
    createuser,
};
