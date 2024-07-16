const mongoose = require("mongoose");

const createModel = (modelName, schemaDefinition) => {
    const schema = new mongoose.Schema(schemaDefinition, {
        timestamps: true,
    });
    return mongoose.model(modelName, schema);
};

module.exports = createModel;
