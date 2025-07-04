const categoryRepo = require('../repo/category.repo.js');

const categoryService = {
    getAllExpenseCategory: async () => {
        try {
            await categoryRepo.getAllExpenseCategory();
        } catch (error) {
            throw new Error(error.message);
        }
    },
}

module.exports = categoryService;