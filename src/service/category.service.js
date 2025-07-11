const categoryRepo = require('../repo/category.repo.js');

const categoryService = {
    getAllCategory: async (categoryType) => {
        try {
            // khởi tạo filter cho tìm kiếm theo type expense | income
            const filter = {};
            if (categoryType && (categoryType === 'expense' || categoryType === 'income')) {
                filter.type = categoryType;
            } else {
                filter.type = 'expense';
            }
            const categories = await categoryRepo.getAllCategory(filter);
            return categories;
        } catch (error) {
            throw new Error(error.message);
        }
    },
}

module.exports = categoryService;