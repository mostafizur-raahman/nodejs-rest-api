const createModel = require("../../_kernel/createModel");

const categorySchema = {
    name: {
        type: String,
        required: true,
    },
};

const Category = createModel("Category", categorySchema);

module.exports = Category;
