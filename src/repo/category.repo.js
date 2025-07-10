const Category = require('../model/category.model');
const Device = require('../model/device.model.js');
const Transaction = require('../model/transaction.model.js');
const User = require('../model/user.model.js');
const Household = require('../model/household.model.js');
const SubscriptionPlan = require('../model/subscriptionPlan.model.js');

const categoryRepo = {
    getAllCategory: async (filter) => {
        return await Category.find(filter);
    },
}

module.exports = categoryRepo;