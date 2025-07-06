const mongoose = require('mongoose');

const householdSchema = new mongoose.Schema(
    {
        name: {type: String},
        joinCode: {type: Date, require: true},
    }
);

module.exports = mongoose.model("Household", householdSchema);