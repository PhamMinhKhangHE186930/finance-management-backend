const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
    {
        note: {type: String},
        date: {type: Date, require: true},
        amount: {type: Number, require: true},
        category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    }
);

module.exports = mongoose.model("Transaction", transactionSchema);