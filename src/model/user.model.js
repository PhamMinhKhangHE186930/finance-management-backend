const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {type: String, require: true},
        username: {type: String, require: true},
        password: {type: String, require: true},
        email: {type: String, require: true},
        status: {type: String, require: true},
        role: {type: String, require: true},
        household: {type: mongoose.Schema.Types.ObjectId, ref: 'Household'},
        subscriptionPlan: {type: mongoose.Schema.Types.ObjectId, ref: 'SubscriptionPlan'},
    }
);

module.exports = mongoose.model("User", userSchema);