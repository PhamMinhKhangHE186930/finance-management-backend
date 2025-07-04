const Category = require('../model/category.model.js');
const Device = require('../model/device.model.js');
const Transaction = require('../model/transaction.model.js');
const User = require('../model/user.model.js');

const categoryRepo = {
    getAllExpenseCategory: async () => {
        try {

        } catch (error) {
            throw new Error(error.message);
        }
    },
}

module.exports = categoryRepo;