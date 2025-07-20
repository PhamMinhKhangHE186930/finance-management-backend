const express = require('express');
const router = express.Router();
const categoryRouter = require('./category.route');
const transactionRouter = require('./transaction.route');
const scheduleRouter = require('./schedule.route');

router.use('/category', categoryRouter);
router.use('/transaction', transactionRouter);
router.use('/schedule', scheduleRouter);

module.exports = router;