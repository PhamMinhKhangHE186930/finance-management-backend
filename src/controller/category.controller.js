const categoryService = require('../service/category.service.js');

const getAllExpenseCategory = async (req, res) => {
    try {
        await categoryService.getAllExpenseCategory();
    } catch (error) {
        return res.json(500).json({
            message: error.message,
        })
    }
}

module.exports = { getAllExpenseCategory }