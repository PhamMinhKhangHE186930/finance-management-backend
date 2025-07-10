const transactionRepo = require('../repo/transaction.repo');

const transactionService = {
    saveTransaction: async (transaction) => {
        try {
            const savedTransaction = await transactionRepo.saveTransaction(transaction);
            if (savedTransaction) {
                return savedTransaction;
            }else{
                return null
            }
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

module.exports = transactionService