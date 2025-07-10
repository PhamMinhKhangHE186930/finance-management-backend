const express = require('express');
const transactionRouter = express.Router();
const {saveTransaction} = require('../controller/transaction.controller');

transactionRouter.post('/saveTransaction', saveTransaction);

module.exports = transactionRouter;