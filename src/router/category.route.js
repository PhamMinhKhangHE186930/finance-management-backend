const express = require('express');
const categoryRouter = express.Router();
const { getAllCategory } = require('../controller/category.controller');

categoryRouter.get('/getAllExpenseCategory/:categoryType', getAllCategory);

module.exports = categoryRouter;