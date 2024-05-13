const createHttpError = require("http-errors");
const cloudinary = require("../config/cloudinary");
const path = require("path");

const createBook = async (req, res, next) => {
    try {
        console.log("Files", req.files);

        const coverImageMimeType = req.files.coverImage[0].mimetype
            .split("/")
            .at(-1);

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

        res.json({});
    } catch (error) {
        return next(
            createHttpError(500, "Error while uploading book image/file")
        );
    }
};

module.exports = createBook;
