const categoryService = require('../service/category.service.js');

const getAllCategory = async (req, res) => {
    try {
        const { categoryType } = req.params;
        const categories = await categoryService.getAllCategory(categoryType);
        if(categories){
            return res.status(200).json({
                returnCode: 0,
                message: "",
                data: categories
            })
        }
        return res.status(200).json({
                returnCode: 1,
                message: "error"
            })
    } catch (error) {
        return res.json(500).json({
            message: error.message,
        })
    }
}

module.exports = { getAllCategory }