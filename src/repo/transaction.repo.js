const Transaction = require('../model/transaction.model');

const transactionRepo = {
    saveTransaction: async (transaction) => {
         return await Transaction.create(transaction);
    },
}

module.exports = transactionRepo