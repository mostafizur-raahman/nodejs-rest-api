const createHttpError = require("http-errors");
const User = require("./userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

const createuser = async (req, res, next) => {
    try {
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
    } catch (error) {
        next(createHttpError(500, "Internal Server Error"));
    }
};

const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            next(createHttpError(500, "All Required Fields"));
        }
        // find email
        const user = await User.findOne({ email });
        if (!user) {
            next(createHttpError(400, "Invalid Credentials"));
        }

        // check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            next(createHttpError(400, "Invalid Credentials"));
        }

        // acces token
        const token = jwt.sign(
            {
                sub: user._id,
            },
            config.jwtSecret,
            {
                expiresIn: "7h",
            }
        );

        return res.status(200).json({
            message: "User logged in successfully",
            token: token,
        });
    } catch (error) {
        next(error);
    }
};
module.exports = {
    createuser,
    loginUser,
};
