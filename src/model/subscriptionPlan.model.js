const mongoose = require('mongoose');

const subscriptionPlanSchema = new mongoose.Schema(
    {
        name: { type: String },
        price: { type: Number },
    }
);

module.exports = mongoose.model("SubscriptionPlan", subscriptionPlanSchema);