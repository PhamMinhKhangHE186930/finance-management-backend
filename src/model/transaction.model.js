const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
    {
        date: {type: Date, require: true},
        note: {type: String},
        amount: {type: Number, require: true},
        category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    }
);

module.exports = mongoose.model("Transaction", transactionSchema);