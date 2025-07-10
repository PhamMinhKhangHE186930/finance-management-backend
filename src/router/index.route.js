const express = require('express');
const router = express.Router();
const categoryRouter = require('./category.route');
const transactionRouter = require('./transaction.route');

router.use('/category', categoryRouter);
router.use('/transaction', transactionRouter);

module.exports = router;