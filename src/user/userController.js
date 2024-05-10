const createHttpError = require("http-errors");
const User = require("./userModel");
const bcrypt = require("bcrypt");

const createuser = async (req, res, next) => {
    const { name, email, password } = req.body;

    // validation
    if (!name || !email || !password) {
        const error = createHttpError(400, "Please provide all fields");
        return next(error);
    }

    const existingEmail = User.findOne({ email });
    if (existingEmail) {
        const error = createHttpError(400, "Email already exists");
        return next(error);
    }

    const hashPassword = await bcrypt.hash(password, 10);
};

module.exports = {
    createuser,
};
