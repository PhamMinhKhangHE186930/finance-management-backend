const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
        name: { type: String, require: true },
        categoryIcon: { type: String },
        color: { type: String, require: true },
        type: { type: String, enum: ['expense', 'income'], require: true },
    }
);

module.exports = mongoose.model("Category", categorySchema);