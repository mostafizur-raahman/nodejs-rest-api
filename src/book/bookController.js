const createHttpError = require("http-errors");
const cloudinary = require("../config/cloudinary");
const path = require("path");
const Book = require("./bookModel");

const createBook = async (req, res, next) => {
    try {
        console.log("Files", req.files);
        const { title, genre } = req.body;

        const coverImageMimeType = req.files.coverImage[0].mimetype
            .split("/")
            .at(-1);

        // for cover image
        const fileName = req.files.coverImage[0].filename;

        const filePath = path.resolve(
            __dirname,
            "../../public/data/uploads",
            fileName
        );

        const uploadResult = await cloudinary.uploader.upload(filePath, {
            filename_override: fileName,
            folder: "Books",
            format: coverImageMimeType,
        });

        // for file
        const bookFileName = req.files.file[0].filename;

        const bookFilePath = path.resolve(
            __dirname,
            "../../public/data/uploads",
            bookFileName
        );

        const bookFileUploadResult = await cloudinary.uploader.upload(
            bookFilePath,
            {
                resource_type: "raw",
                filename_override: bookFileName,
                folder: "Books-pdf",
                format: "pdf",
            }
        );
        console.log("file upload result ", bookFileUploadResult);
        console.log("upload result", uploadResult);

        const newBook = await Book.create({
            title,
            author: "663de9db002e06189aec08a9",
            coverImage: uploadResult.secure_url,
            file: bookFileUploadResult.secure_url,
            genre,
        });

        res.json({});
    } catch (error) {
        return next(
            createHttpError(500, "Error while uploading book image/file")
        );
    }
};

module.exports = createBook;
