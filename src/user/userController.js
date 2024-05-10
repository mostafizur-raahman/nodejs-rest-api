const createHttpError = require("http-errors");
const User = require("./userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

const createuser = async (req, res, next) => {
    const { name, email, password } = req.body;

    // validation
    if (!name || !email || !password) {
        const error = createHttpError(400, "Please provide all fields");
        return next(error);
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
        const error = createHttpError(400, "Email already exists");
        return next(error);
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
        name,
        email,
        password: hashPassword,
    });

    // Token
    const token = jwt.sign(
        {
            sub: newUser._id,
        },
        config.jwtSecret,
        {
            expiresIn: "7h",
        }
    );

    return res.status(201).json({
        message: "User created successfully",
        newUser: newUser,
        token: token,
    });
};

module.exports = {
    createuser,
};
