const express = require('express');
const categoryRouter = express.Router();
const { getAllExpenseCategory } = require('../controller/category.controller');

categoryRouter.get('/getAllExpenseCategory/:categoryType', getAllExpenseCategory);

module.exports = categoryRouter;