const transactionService = require('../service/transaction.service');

const saveTransaction = async (req, res) => {
    try {
        const { date, note, amount, category, user } = req.body;
        const data = { date, note, amount, category, user };
        const savedTransaction = await transactionService.saveTransaction(data);
        if (!savedTransaction) {
            return res.status(400).json({
                returnCode: 1,
                message: 'Không thể lưu giao dịch'
            });
        }
        return res.status(200).json({
            returnCode: 0,
            message: '',
            data: savedTransaction
        })
    } catch (error) {
        return res.status(500).json({
            returnCode: 1,
            message: error.message
        })
    }
}

module.exports = { saveTransaction };