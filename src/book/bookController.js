const createBook = (req, res, next) => {
    console.log("Files", req.files);

    res.json({});
};

module.exports = createBook;
